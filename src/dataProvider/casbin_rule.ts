import { gql } from "@apollo/client";
import { omit } from "lodash";
import { type DataProvider } from "react-admin";
import { client } from "./client";

export const casbinRuleDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const result = await client.query({
      query: gql`
        query casbin_rule_list(
          $limit: Int!
          $page: Int!
          $order_by: CasbinRuleOrderInput
          $filters: CasbinRuleFilterInput
        ) {
          casbin_rule(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id
              ptype
              v0
              v1
              v2
              v3
              v4
              v5
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
        order_by: { [sort?.field || "id"]: sort?.order || "ASC" },
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
    const res = result.data.casbin_rule;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query casbin_rule_one($filters: CasbinRuleFilterInput) {
          casbin_rule(filters: $filters) {
            nodes {
              id
              ptype
              v0
              v1
              v2
              v3
              v4
              v5
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
    return { data: result.data.casbin_rule.nodes[0] };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query casbin_rule_many($filters: CasbinRuleFilterInput) {
          casbin_rule(filters: $filters) {
            nodes {
              id
              ptype
              v0
              v1
              v2
              v3
              v4
              v5
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
    return { data: result.data.casbin_rule.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query casbin_rule_many_ref(
          $limit: Int!
          $page: Int!
          $filters: CasbinRuleFilterInput
        ) {
          casbin_rule(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id
              ptype
              v0
              v1
              v2
              v3
              v4
              v5
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
    const res = result.data.casbin_rule;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_casbin_rule_create_one(
          $data: CasbinRuleInsertInput!
        ) {
          casbin_rule_create_one(data: $data) {
            id
            ptype
            v0
            v1
            v2
            v3
            v4
            v5
          }
        }
      `,
      variables: {
        data: omit(params.data, ["__typename"]),
      },
    });
    return {
      data: result.data.casbin_rule_create_one,
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_casbin_rule_update(
          $data: CasbinRuleUpdateInput!
          $filter: CasbinRuleFilterInput
        ) {
          casbin_rule_update(data: $data, filter: $filter) {
            id
            ptype
            v0
            v1
            v2
            v3
            v4
            v5
          }
        }
      `,
      variables: {
        data: omit(data, ["id", "__typename"]),
        filter: {
          id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
    });
    return {
      data: result.data.casbin_rule_update[0],
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_casbin_rule_update(
          $data: CasbinRuleUpdateInput!
          $filter: CasbinRuleFilterInput
        ) {
          casbin_rule_update(data: $data, filter: $filter) {
            id
            ptype
            v0
            v1
            v2
            v3
            v4
            v5
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
        mutation mutation_casbin_rule_delete($filter: CasbinRuleFilterInput) {
          casbin_rule_delete(filter: $filter)
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
        mutation mutation_casbin_rule_delete($filter: CasbinRuleFilterInput) {
          casbin_rule_delete(filter: $filter)
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
