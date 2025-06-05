import { gql } from "@apollo/client";
import { omit } from "lodash";
import { type DataProvider } from "react-admin";
import { client } from "./client";

export const productModelDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field =
      !sort || sort?.field === "id" ? "product_model_id" : sort?.field;
    const result = await client.query({
      query: gql`
        query product_model_list(
          $limit: Int!
          $page: Int!
          $order_by: ProductModelOrderInput
          $filters: ProductModelFilterInput
        ) {
          product_model(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_model_id
              product_model_id
              name
              catalog_description
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
    const res = result.data.product_model;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query product_model_one($filters: ProductModelFilterInput) {
          product_model(filters: $filters) {
            nodes {
              id: product_model_id
              product_model_id
              name
              catalog_description
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_model_id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
      context: {
        fetchOptions: {
          signal,
        },
      },
    });
    return { data: result.data.product_model.nodes[0] };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query product_model_many($filters: ProductModelFilterInput) {
          product_model(filters: $filters) {
            nodes {
              id: product_model_id
              product_model_id
              name
              catalog_description
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_model_id: {
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
    return { data: result.data.product_model.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query product_model_many_ref(
          $limit: Int!
          $page: Int!
          $filters: ProductModelFilterInput
        ) {
          product_model(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_model_id
              product_model_id
              name
              catalog_description
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
    const res = result.data.product_model;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_model_create_one($data: ProductInsertInput!) {
          product_model_create_one(data: $data) {
            id: product_model_id
            product_model_id
            name
            catalog_description
            created_date
          }
        }
      `,
      variables: {
        data: omit(params.data, ["__typename"]),
      },
    });
    return {
      data: result.data.product_create_model_one,
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_model_update(
          $data: ProductUpdateInput!
          $filter: ProductModelFilterInput
        ) {
          product_model_update(data: $data, filter: $filter) {
            id: product_model_id
            product_model_id
            name
            catalog_description
            created_date
          }
        }
      `,
      variables: {
        data: omit(data, ["id", "product_model_id", "__typename"]),
        filter: {
          product_model_id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
    });
    return {
      data: result.data.product_model_update[0],
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_model_update(
          $data: ProductUpdateInput!
          $filter: ProductModelFilterInput
        ) {
          product_model_update(data: $data, filter: $filter) {
            id: product_model_id
            product_model_id
            name
            catalog_description
            created_date
          }
        }
      `,
      variables: {
        data,
        filter: {
          product_model_id: {
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
        mutation mutation_product_model_delete(
          $filter: ProductModelFilterInput
        ) {
          product_model_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_model_id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
    });
    return {
      data: result.data,
    };
  },
  deleteMany: async (_resource, { ids }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_model_delete(
          $filter: ProductModelFilterInput
        ) {
          product_model_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_model_id: {
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
