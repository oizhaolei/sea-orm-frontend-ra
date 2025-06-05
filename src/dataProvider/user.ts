import { gql } from "@apollo/client";
import { omit } from "lodash";
import { type DataProvider } from "react-admin";
import { client } from "./client";

const fields = `
  created_at
  updated_at
  id
  pid
  email
  password
  api_key
  name
  reset_token
  reset_sent_at
  email_verification_token
  email_verification_sent_at
  email_verified_at
  magic_link_token
  magic_link_expiration
`;
export const userDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field = !sort || sort?.field === "id" ? "id" : sort?.field;
    const result = await client.query({
      query: gql`
        query user_list(
          $limit: Int!
          $page: Int!
          $order_by: UserOrderInput
          $filters: UserFilterInput
        ) {
          user(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              ${fields}
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
    const res = result.data.user;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query user_one($filters: UserFilterInput) {
          user(filters: $filters) {
            nodes {
              ${fields}
            }
          }
        }
      `,
      variables: {
        filters: {
          id: {
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
    return { data: result.data.user.nodes[0] };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query user_many($filters: UserFilterInput) {
          user(filters: $filters) {
            nodes {
              ${fields}
            }
          }
        }
      `,
      variables: {
        filters: {
          id: {
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
    return { data: result.data.user.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query user_many_ref(
          $limit: Int!
          $page: Int!
          $filters: UserFilterInput
        ) {
          user(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              ${fields}
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
    const res = result.data.user;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_user_create_one($data: UserInsertInput!) {
          user_create_one(data: $data) {
              ${fields}
          }
        }
      `,
      variables: {
        data: omit(params.data, ["__typename"]),
      },
    });
    return {
      data: result.data.user_create_one,
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_user_update(
          $data: UserUpdateInput!
          $filter: UserFilterInput
        ) {
          user_update(data: $data, filter: $filter) {
              ${fields}
          }
        }
      `,
      variables: {
        data: omit(data, ["id", "id", "__typename"]),
        filter: {
          id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
    });
    return {
      data: result.data.user_update[0],
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_user_update(
          $data: UserUpdateInput!
          $filter: UserFilterInput
        ) {
          user_update(data: $data, filter: $filter) {
              ${fields}
          }
        }
      `,
      variables: {
        data,
        filter: {
          id: {
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
        mutation mutation_user_delete($filter: UserFilterInput) {
          user_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          id: {
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
        mutation mutation_user_delete($filter: UserFilterInput) {
          user_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          id: {
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
