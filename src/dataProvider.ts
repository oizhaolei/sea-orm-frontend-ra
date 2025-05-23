import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { capitalize, omit } from "lodash";
import type { DataProvider } from "react-admin";

const apiUrl = "http://localhost:8086/api/graphql";

const client = new ApolloClient({
  uri: apiUrl,
  headers: {
    "x-graphql-token":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiJkZW1vQHNlYS1xbC5vcmciLCJleHAiOjE3NDg1MDIyNjUsImNsYWltcyI6bnVsbH0.7H_iib9FipoMtMUpnjk42eUwRbwR0ufR4rl1AcqadEY0eauxTdztS2zBkqDC-sRVkotr4M4wVO8mMiOEbBHZUQ",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwaWQiOiJkZW1vQHNlYS1xbC5vcmciLCJleHAiOjE3NDg1MDIyNjUsImNsYWltcyI6bnVsbH0.7H_iib9FipoMtMUpnjk42eUwRbwR0ufR4rl1AcqadEY0eauxTdztS2zBkqDC-sRVkotr4M4wVO8mMiOEbBHZUQ",
  },
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

const fields = {
  posts: "id title body author_id created_at",
  customer: `
                id: customer_id
                title
                first_name
                middle_name
                last_name
                name_style
                suffix
                company_name
                sales_person
                email_address
                phone
                rowguid
                created_date
`,
};

export const dataProvider: DataProvider = {
  getList: (resource, { sort, pagination, filter, signal }) => {
    const { field: _field, order } = sort;
    const field = _field === "id" ? "customer_id" : _field;
    console.log("sort:", sort);
    const { page, perPage } = pagination;
    console.log("pagination:", pagination);
    return client
      .query({
        query: gql`
          query ($limit: Int, $page: Int, $order_by: [ ${capitalize(resource)}OrderInput! ], $filters: ${capitalize(resource)}FilterInput) {
            ${resource}(
              filters: $filters
              order_by: $order_by
              pagination: { page: { limit: $limit, page: $page } }
            ) {
              nodes {
                ${fields[resource]}
              }
              pagination_info {
                current
                pages
                offset
                total
              }
            }
          }
        `,
        variables: {
          limit: perPage,
          page: page - 1,
          order_by: { [field]: order },
          filters: Object.keys(filter).reduce(
            (prev, key) => ({
              ...prev,
              [key]: { _eq: filter[key] },
            }),
            {},
          ),
        },
        context: {
          fetchOptions: {
            signal,
          },
        },
      })
      .then((result) => {
        const res = result.data[resource];
        console.log("res:", res);
        return {
          data: res.nodes,
          total: res.pagination_info.total,
        };
      });
  },
  getOne: (resource, params) => {
    return client
      .query({
        query: gql`
            query ($id: Int!) {
                ${resource}_by_pk(id: $id) {
                    ${fields[resource]}
                }
            }`,
        variables: {
          id: params.id,
        },
        context: {
          fetchOptions: {
            signal: params.signal,
          },
        },
      })
      .then((result) => ({ data: result.data[`${resource}_by_pk`] }));
  },
  getMany: (resource, params) => {
    return client
      .query({
        query: gql`
            query ($where: ${resource}_bool_exp) {
                ${resource}(where: $where) {
                    ${fields[resource]}
                }
            }`,
        variables: {
          where: {
            id: { _in: params.ids },
          },
        },
        context: {
          fetchOptions: {
            signal: params.signal,
          },
        },
      })
      .then((result) => ({ data: result.data[resource] }));
  },
  getManyReference: (
    resource,
    { target, id, sort, pagination, filter, signal },
  ) => {
    const { field, order } = sort;
    const { page, perPage } = pagination;
    return client
      .query({
        query: gql`
            query ($limit: Int, $offset: Int, $order_by: [${resource}_order_by!], $where: ${resource}_bool_exp) {
                ${resource}(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
                    ${fields[resource]}
                }
                ${resource}_aggregate(where: $where) {
                    aggregate {
                        count
                    }
                }
            }`,
        variables: {
          limit: perPage,
          offset: (page - 1) * perPage,
          order_by: { [field]: order.toLowerCase() },
          where: Object.keys(filter).reduce(
            (prev, key) => ({
              ...prev,
              [key]: { _eq: filter[key] },
            }),
            { [target]: { _eq: id } },
          ),
        },
        context: {
          fetchOptions: {
            signal,
          },
        },
      })
      .then((result) => ({
        data: result.data[resource],
        total: result.data[`${resource}_aggregate`].aggregate.count,
      }));
  },
  create: (resource, params) => {
    return client
      .mutate({
        mutation: gql`
            mutation ($data: ${resource}_insert_input!) {
                insert_${resource}_one(object: $data) {
                    ${fields[resource]}
                }
            }`,
        variables: {
          data: omit(params.data, ["__typename"]),
        },
      })
      .then((result) => ({
        data: result.data[`insert_${resource}_one`],
      }));
  },
  update: (resource, params) => {
    return client
      .mutate({
        mutation: gql`
            mutation ($id: Int!, $data: ${resource}_set_input!) {
                update_${resource}_by_pk(pk_columns: { id: $id }, _set: $data) {
                    ${fields[resource]}
                }
            }`,
        variables: {
          id: params.id,
          data: omit(params.data, ["__typename"]),
        },
      })
      .then((result) => ({
        data: result.data[`update_${resource}_by_pk`],
      }));
  },
  updateMany: (resource, params) => {
    return client
      .mutate({
        mutation: gql`
            mutation ($where: ${resource}_bool_exp!, $data: ${resource}_set_input!) {
                update_${resource}(where: $where, _set: $data) {
                    affected_rows
                }
            }`,
        variables: {
          where: {
            id: { _in: params.ids },
          },
          data: omit(params.data, ["__typename"]),
        },
      })
      .then((result) => ({
        data: params.ids,
      }));
  },
  delete: (resource, params) => {
    return client
      .mutate({
        mutation: gql`
            mutation ($id: Int!) {
                delete_${resource}_by_pk(id: $id) {
                    ${fields[resource]}
                }
            }`,
        variables: {
          id: params.id,
        },
      })
      .then((result) => ({
        data: result.data[`delete_${resource}_by_pk`],
      }));
  },
  deleteMany: (resource, params) => {
    return client
      .mutate({
        mutation: gql`
            mutation ($where: ${resource}_bool_exp!) {
                delete_${resource}(where: $where) {
                    affected_rows
                }
            }`,
        variables: {
          where: {
            id: { _in: params.ids },
          },
        },
      })
      .then((result) => ({
        data: params.ids,
      }));
  },
};
