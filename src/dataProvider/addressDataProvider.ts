import { gql } from "@apollo/client";
import { omit } from "lodash";
import { type DataProvider } from "react-admin";
import { client } from "./client";

export const addressDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field = !sort || sort?.field === "id" ? "address_id" : sort?.field;
    const result = await client.query({
      query: gql`
        query address_list(
          $limit: Int!
          $page: Int!
          $order_by: AddressOrderInput
          $filters: AddressFilterInput
        ) {
          address(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: address_id
              address_id
              address_line1
              address_line2
              city
              state_province
              country_region
              postal_code
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
    const res = result.data.address;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query address_one($filters: AddressFilterInput) {
          address(filters: $filters) {
            nodes {
              id: address_id
              address_id
              address_line1
              address_line2
              city
              state_province
              country_region
              postal_code
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          address_id: {
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
    return { data: result.data.address.nodes[0] };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query address_many($filters: AddressFilterInput) {
          address(filters: $filters) {
            nodes {
              id: address_id
              address_id
              address_line1
              address_line2
              city
              state_province
              country_region
              postal_code
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          address_id: {
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
    return { data: result.data.address.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query address_many_ref(
          $limit: Int!
          $page: Int!
          $filters: AddressFilterInput
        ) {
          address(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: address_id
              name
              address_number
              color
              standard_cost
              list_price
              size
              weight
              address_category_id
              address_model_id
              sell_start_date
              sell_end_date
              discontinued_date
              thumb_nail_photo
              thumbnail_photo_file_name
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
    const res = result.data.address;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_address_create_one($data: AddressInsertInput!) {
          address_create_one(data: $data) {
            id: address_id
            address_id
            address_line1
            address_line2
            city
            state_province
            country_region
            postal_code
            created_date
          }
        }
      `,
      variables: {
        data: omit(params.data, ["__typename"]),
      },
    });
    return {
      data: result.data.address_create_one,
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_address_update(
          $data: AddressUpdateInput!
          $filter: AddressFilterInput
        ) {
          address_update(data: $data, filter: $filter) {
            id: address_id
            address_id
            address_line1
            address_line2
            city
            state_province
            country_region
            postal_code
            created_date
          }
        }
      `,
      variables: {
        data: omit(data, ["id", "address_id", "__typename"]),
        filter: {
          address_id: {
            eq: parseInt(id.toString(), 10),
          },
        },
      },
    });
    return {
      data: result.data.address_update[0],
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_address_update(
          $data: AddressUpdateInput!
          $filter: AddressFilterInput
        ) {
          address_update(data: $data, filter: $filter) {
            id: address_id
            address_id
            address_line1
            address_line2
            city
            state_province
            country_region
            postal_code
            created_date
          }
        }
      `,
      variables: {
        data,
        filter: {
          address_id: {
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
        mutation mutation_address_delete($filter: AddressFilterInput) {
          address_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          address_id: {
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
        mutation mutation_address_delete($filter: AddressFilterInput) {
          address_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          address_id: {
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
