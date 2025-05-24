import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { omit } from "lodash";
import type { DataProvider } from "react-admin";

const apiUrl = "http://localhost:8086/api/graphql";

const accessToken = localStorage.getItem("token") || "";
const client = new ApolloClient({
  uri: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  cache: new InMemoryCache(),
});

const customerDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field = !sort || sort?.field === "id" ? "customer_id" : sort?.field;
    const result = await client.query({
      query: gql`
        query customer_list(
          $limit: Int!
          $page: Int!
          $order_by: CustomerOrderInput
          $filters: CustomerFilterInput
        ) {
          customer(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
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
        limit: pagination?.perPage,
        page: (pagination?.page || 1) - 1,
        order_by: { [field]: sort?.order },
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
    });
    const res = result.data.customer;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query customer_one($filters: CustomerFilterInput) {
          customer(filters: $filters) {
            nodes {
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
            }
          }
        }
      `,
      variables: {
        filters: {
          customer_id: {
            eq: id,
          },
        },
      },
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return { data: result.data[`customer_by_pk`] };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query customer_many($filters: CustomerFilterInput) {
          customer(filters: $filters) {
            nodes {
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
            }
          }
        }
      `,
      variables: {
        filters: {
          customer_id: {
            is_in: ids,
          },
        },
      },
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return { data: result.data.customer };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query customer_many_ref(
          $limit: Int!
          $page: Int!
          $filters: CustomerFilterInput
        ) {
          customer(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
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
    });
    const res = result.data.customer;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_customer_create_one($data: CustomerInsertInput!) {
          customer_create_one(data: $data) {
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
          }
        }
      `,
      variables: {
        data: omit(params.data, ["__typename"]),
      },
    });
    return {
      data: result.data[`insert_customer_one`],
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_customer_update(
          $data: CustomerUpdateInput!
          $filter: CustomerFilterInput
        ) {
          customer_update(data: $data, filter: $filter) {
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
          }
        }
      `,
      variables: {
        data: data,
        filter: {
          customer_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data[`update_customer_by_pk`],
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_customer_update(
          $data: CustomerUpdateInput!
          $filter: CustomerFilterInput
        ) {
          customer_update(data: $data, filter: $filter) {
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
          }
        }
      `,
      variables: {
        data,
        filter: {
          customer_id: {
            is_in: ids,
          },
        },
      },
    });
    console.log("result:", result);

    return {
      data: ids,
    };
  },
  delete: async (_resource, { id }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_customer_delete($filter: CustomerFilterInput) {
          customer_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          customer_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data[`delete_customer_by_pk`],
    };
  },
  deleteMany: async (_resource, { ids }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_customer_delete($filter: CustomerFilterInput) {
          customer_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          customer_id: {
            is_in: ids,
          },
        },
      },
    });
    console.log("result:", result);
    return {
      data: ids,
    };
  },
};

const getDataProvider = (resource: string) => {
  if (resource === "customer") {
    return customerDataProvider;
  }
  throw new Error(`invalid resource: ${resource}`);
};

export const dataProvider: DataProvider = {
  // get a list of records based on sort, filter, and pagination
  getList: (resource, params) =>
    getDataProvider(resource).getList(resource, params),
  // get a single record by id
  getOne: (resource, params) =>
    getDataProvider(resource).getOne(resource, params),
  // get a list of records based on an array of ids
  getMany: (resource, params) =>
    getDataProvider(resource).getMany(resource, params),
  // get the records referenced to another record, e.g. comments for a post
  getManyReference: (resource, params) =>
    getDataProvider(resource).getManyReference(resource, params),
  // create a record
  create: (resource, params) =>
    getDataProvider(resource).create(resource, params),
  // update a record based on a patch
  update: (resource, params) =>
    getDataProvider(resource).update(resource, params),
  // update a list of records based on an array of ids and a common patch
  updateMany: (resource, params) =>
    getDataProvider(resource).updateMany(resource, params),
  // delete a record by id
  delete: (resource, params) =>
    getDataProvider(resource).delete(resource, params),
  // delete a list of records based on an array of ids
  deleteMany: (resource, params) =>
    getDataProvider(resource).deleteMany(resource, params),
};
