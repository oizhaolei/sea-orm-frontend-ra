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
    return { data: result.data.customer_id };
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
    return { data: result.data.customer.nodes };
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
      data: result.data.customer_id,
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
      data: result.data.customer_id,
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

const productDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field = !sort || sort?.field === "id" ? "product_id" : sort?.field;
    const result = await client.query({
      query: gql`
        query product_list(
          $limit: Int!
          $page: Int!
          $order_by: ProductOrderInput
          $filters: ProductFilterInput
        ) {
          product(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_id
              name
              product_number
              color
              standard_cost
              list_price
              size
              weight
              product_category_id
              product_model_id
              sell_start_date
              sell_end_date
              discontinued_date
              thumb_nail_photo
              thumbnail_photo_file_name
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
    const res = result.data.product;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query product_one($filters: ProductFilterInput) {
          product(filters: $filters) {
            nodes {
              id: product_id
              name
              product_number
              color
              standard_cost
              list_price
              size
              weight
              product_category_id
              product_model_id
              sell_start_date
              sell_end_date
              discontinued_date
              thumb_nail_photo
              thumbnail_photo_file_name
              rowguid
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_id: {
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
    return { data: result.data.product_id };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query product_many($filters: ProductFilterInput) {
          product(filters: $filters) {
            nodes {
              id: product_id
              name
              product_number
              color
              standard_cost
              list_price
              size
              weight
              product_category_id
              product_model_id
              sell_start_date
              sell_end_date
              discontinued_date
              thumb_nail_photo
              thumbnail_photo_file_name
              rowguid
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_id: {
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
    return { data: result.data.product.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query product_many_ref(
          $limit: Int!
          $page: Int!
          $filters: ProductFilterInput
        ) {
          product(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_id
              name
              product_number
              color
              standard_cost
              list_price
              size
              weight
              product_category_id
              product_model_id
              sell_start_date
              sell_end_date
              discontinued_date
              thumb_nail_photo
              thumbnail_photo_file_name
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
    const res = result.data.product;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_create_one($data: ProductInsertInput!) {
          product_create_one(data: $data) {
            id: product_id
            name
            product_number
            color
            standard_cost
            list_price
            size
            weight
            product_category_id
            product_model_id
            sell_start_date
            sell_end_date
            discontinued_date
            thumb_nail_photo
            thumbnail_photo_file_name
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
      data: result.data[`insert_product_one`],
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_update(
          $data: ProductUpdateInput!
          $filter: ProductFilterInput
        ) {
          product_update(data: $data, filter: $filter) {
            id: product_id
            name
            product_number
            color
            standard_cost
            list_price
            size
            weight
            product_category_id
            product_model_id
            sell_start_date
            sell_end_date
            discontinued_date
            thumb_nail_photo
            thumbnail_photo_file_name
            rowguid
            created_date
          }
        }
      `,
      variables: {
        data: data,
        filter: {
          product_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_id,
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_update(
          $data: ProductUpdateInput!
          $filter: ProductFilterInput
        ) {
          product_update(data: $data, filter: $filter) {
            id: product_id
            name
            product_number
            color
            standard_cost
            list_price
            size
            weight
            product_category_id
            product_model_id
            sell_start_date
            sell_end_date
            discontinued_date
            thumb_nail_photo
            thumbnail_photo_file_name
            rowguid
            created_date
          }
        }
      `,
      variables: {
        data,
        filter: {
          product_id: {
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
        mutation mutation_product_delete($filter: ProductFilterInput) {
          product_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_id,
    };
  },
  deleteMany: async (_resource, { ids }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_delete($filter: ProductFilterInput) {
          product_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_id: {
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

const productModelDataProvider: DataProvider = {
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
              rowguid
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_model_id: {
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
    return { data: result.data.product_model_id };
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
              rowguid
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
      data: result.data[`insert_product_model_one`],
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
            rowguid
            created_date
          }
        }
      `,
      variables: {
        data: data,
        filter: {
          product_model_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_model_id,
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
            rowguid
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
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_model_id,
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

const productCategoryDataProvider: DataProvider = {
  getList: async (_resource, { sort, pagination, filter, signal }) => {
    const field =
      !sort || sort?.field === "id" ? "product_category_id" : sort?.field;
    const result = await client.query({
      query: gql`
        query product_category_list(
          $limit: Int!
          $page: Int!
          $order_by: ProductCategoryOrderInput
          $filters: ProductCategoryFilterInput
        ) {
          product_category(
            filters: $filters
            order_by: $order_by
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_category_id
              product_category_id
              parent_product_category_id
              name
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
    const res = result.data.product_category;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  getOne: async (_resource, { id, signal }) => {
    const result = await client.query({
      query: gql`
        query product_category_one($filters: ProductCategoryFilterInput) {
          product_category(filters: $filters) {
            nodes {
              id: product_category_id
              product_category_id
              parent_product_category_id
              name
              rowguid
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_category_id: {
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
    return { data: result.data.product_category_id };
  },
  getMany: async (_resource, { ids, signal }) => {
    const result = await client.query({
      query: gql`
        query product_category_many($filters: ProductCategoryFilterInput) {
          product_category(filters: $filters) {
            nodes {
              id: product_category_id
              product_category_id
              parent_product_category_id
              name
              rowguid
              created_date
            }
          }
        }
      `,
      variables: {
        filters: {
          product_category_id: {
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
    return { data: result.data.product_category.nodes };
  },
  getManyReference: async (_resource, { pagination, filter, signal }) => {
    const { page = 1, perPage = 10 } = pagination;
    const result = await client.query({
      query: gql`
        query product_category_many_ref(
          $limit: Int!
          $page: Int!
          $filters: ProductCategoryFilterInput
        ) {
          product_category(
            filters: $filters
            pagination: { page: { limit: $limit, page: $page } }
          ) {
            nodes {
              id: product_category_id
              product_category_id
              parent_product_category_id
              name
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
    const res = result.data.product_category;
    return {
      data: res.nodes,
      total: res.pagination_info.total,
    };
  },
  create: async (_resource, params) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_category_create_one(
          $data: ProductInsertInput!
        ) {
          product_category_create_one(data: $data) {
            id: product_category_id
            product_category_id
            parent_product_category_id
            name
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
      data: result.data[`insert_product_category_one`],
    };
  },
  update: async (_resource, { id, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_category_update(
          $data: ProductUpdateInput!
          $filter: ProductCategoryFilterInput
        ) {
          product_category_update(data: $data, filter: $filter) {
            id: product_category_id
            product_category_id
            parent_product_category_id
            name
            rowguid
            created_date
          }
        }
      `,
      variables: {
        data: data,
        filter: {
          product_category_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_category_id,
    };
  },
  updateMany: async (_resource, { ids, data }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_category_update(
          $data: ProductUpdateInput!
          $filter: ProductCategoryFilterInput
        ) {
          product_category_update(data: $data, filter: $filter) {
            id: product_category_id
            product_category_id
            parent_product_category_id
            name
            rowguid
            created_date
          }
        }
      `,
      variables: {
        data,
        filter: {
          product_category_id: {
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
        mutation mutation_product_category_delete(
          $filter: ProductCategoryFilterInput
        ) {
          product_category_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_category_id: {
            eq: id,
          },
        },
      },
    });
    return {
      data: result.data.product_category_id,
    };
  },
  deleteMany: async (_resource, { ids }) => {
    const result = await client.mutate({
      mutation: gql`
        mutation mutation_product_category_delete(
          $filter: ProductCategoryFilterInput
        ) {
          product_category_delete(filter: $filter)
        }
      `,
      variables: {
        filter: {
          product_category_id: {
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
  if (resource === "customers") {
    return customerDataProvider;
  } else if (resource === "products") {
    return productDataProvider;
  } else if (resource === "product_models") {
    return productModelDataProvider;
  } else if (resource === "product_categories") {
    return productCategoryDataProvider;
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
