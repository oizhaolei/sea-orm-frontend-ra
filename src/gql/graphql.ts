/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  address_id: Scalars['Int']['output'];
  address_line1: Scalars['String']['output'];
  address_line2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country_region: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer: CustomerConnection;
  customer_address: CustomerAddressConnection;
  postal_code: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  state_province: Scalars['String']['output'];
};


export type AddressCustomerArgs = {
  filters?: InputMaybe<CustomerFilterInput>;
  order_by?: InputMaybe<CustomerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type AddressCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type AddressBasic = {
  __typename?: 'AddressBasic';
  address_id: Scalars['Int']['output'];
  address_line1: Scalars['String']['output'];
  address_line2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country_region: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  postal_code: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  state_province: Scalars['String']['output'];
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  edges: Array<AddressEdge>;
  nodes: Array<Address>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type AddressFilterInput = {
  address_id?: InputMaybe<IntegerFilterInput>;
  address_line1?: InputMaybe<StringFilterInput>;
  address_line2?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<AddressFilterInput>>;
  city?: InputMaybe<StringFilterInput>;
  country_region?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  or?: InputMaybe<Array<AddressFilterInput>>;
  postal_code?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  state_province?: InputMaybe<StringFilterInput>;
};

export type AddressInsertInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_line1: Scalars['String']['input'];
  address_line2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country_region: Scalars['String']['input'];
  created_date: Scalars['String']['input'];
  postal_code: Scalars['String']['input'];
  rowguid: Scalars['String']['input'];
  state_province: Scalars['String']['input'];
};

export type AddressOrderInput = {
  address_id?: InputMaybe<OrderByEnum>;
  address_line1?: InputMaybe<OrderByEnum>;
  address_line2?: InputMaybe<OrderByEnum>;
  city?: InputMaybe<OrderByEnum>;
  country_region?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  postal_code?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  state_province?: InputMaybe<OrderByEnum>;
};

export type AddressUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country_region?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  state_province?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  is_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_null?: InputMaybe<Scalars['Boolean']['input']>;
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CursorInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  address: AddressConnection;
  company_name?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  customer_address: CustomerAddressConnection;
  customer_id: Scalars['Int']['output'];
  email_address?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  middle_name?: Maybe<Scalars['String']['output']>;
  name_style: Scalars['Boolean']['output'];
  password_hash: Scalars['String']['output'];
  password_salt: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['String']['output'];
  sales_order_header: SalesOrderHeaderConnection;
  sales_person?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CustomerAddressArgs = {
  filters?: InputMaybe<AddressFilterInput>;
  order_by?: InputMaybe<AddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type CustomerCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type CustomerSales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  address?: Maybe<Address>;
  address_id: Scalars['Int']['output'];
  address_type: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customer_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type CustomerAddressBasic = {
  __typename?: 'CustomerAddressBasic';
  address_id: Scalars['Int']['output'];
  address_type: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  edges: Array<CustomerAddressEdge>;
  nodes: Array<CustomerAddress>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type CustomerAddressEdge = {
  __typename?: 'CustomerAddressEdge';
  cursor: Scalars['String']['output'];
  node: CustomerAddress;
};

export type CustomerAddressFilterInput = {
  address_id?: InputMaybe<IntegerFilterInput>;
  address_type?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<CustomerAddressFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  or?: InputMaybe<Array<CustomerAddressFilterInput>>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type CustomerAddressInsertInput = {
  address_id: Scalars['Int']['input'];
  address_type: Scalars['String']['input'];
  created_date: Scalars['String']['input'];
  customer_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
};

export type CustomerAddressOrderInput = {
  address_id?: InputMaybe<OrderByEnum>;
  address_type?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type CustomerAddressUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_type?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerBasic = {
  __typename?: 'CustomerBasic';
  company_name?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  customer_id: Scalars['Int']['output'];
  email_address?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  middle_name?: Maybe<Scalars['String']['output']>;
  name_style: Scalars['Boolean']['output'];
  password_hash: Scalars['String']['output'];
  password_salt: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['String']['output'];
  sales_person?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  nodes: Array<Customer>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type CustomerFilterInput = {
  and?: InputMaybe<Array<CustomerFilterInput>>;
  company_name?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  email_address?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  middle_name?: InputMaybe<StringFilterInput>;
  name_style?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  password_hash?: InputMaybe<StringFilterInput>;
  password_salt?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_person?: InputMaybe<StringFilterInput>;
  suffix?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type CustomerInsertInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email_address?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name_style: Scalars['Boolean']['input'];
  password_hash: Scalars['String']['input'];
  password_salt: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  rowguid: Scalars['String']['input'];
  sales_person?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerOrderInput = {
  company_name?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  email_address?: InputMaybe<OrderByEnum>;
  first_name?: InputMaybe<OrderByEnum>;
  last_name?: InputMaybe<OrderByEnum>;
  middle_name?: InputMaybe<OrderByEnum>;
  name_style?: InputMaybe<OrderByEnum>;
  password_hash?: InputMaybe<OrderByEnum>;
  password_salt?: InputMaybe<OrderByEnum>;
  phone?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_person?: InputMaybe<OrderByEnum>;
  suffix?: InputMaybe<OrderByEnum>;
  title?: InputMaybe<OrderByEnum>;
};

export type CustomerUpdateInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email_address?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name_style?: InputMaybe<Scalars['Boolean']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  password_salt?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_person?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  between?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  is_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_null?: InputMaybe<Scalars['Float']['input']>;
  is_null?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not_between?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntegerFilterInput = {
  between?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  is_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_null?: InputMaybe<Scalars['Int']['input']>;
  is_null?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not_between?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _ping?: Maybe<Scalars['String']['output']>;
  address_create_batch: Array<AddressBasic>;
  address_create_one: AddressBasic;
  address_delete: Scalars['Int']['output'];
  address_update: Array<AddressBasic>;
  customer_address_create_batch: Array<CustomerAddressBasic>;
  customer_address_create_one: CustomerAddressBasic;
  customer_address_delete: Scalars['Int']['output'];
  customer_address_update: Array<CustomerAddressBasic>;
  customer_create_batch: Array<CustomerBasic>;
  customer_create_one: CustomerBasic;
  customer_delete: Scalars['Int']['output'];
  customer_update: Array<CustomerBasic>;
  product_category_create_batch: Array<ProductCategoryBasic>;
  product_category_create_one: ProductCategoryBasic;
  product_category_delete: Scalars['Int']['output'];
  product_category_update: Array<ProductCategoryBasic>;
  product_create_batch: Array<ProductBasic>;
  product_create_one: ProductBasic;
  product_delete: Scalars['Int']['output'];
  product_description_create_batch: Array<ProductDescriptionBasic>;
  product_description_create_one: ProductDescriptionBasic;
  product_description_delete: Scalars['Int']['output'];
  product_description_update: Array<ProductDescriptionBasic>;
  product_model_create_batch: Array<ProductModelBasic>;
  product_model_create_one: ProductModelBasic;
  product_model_delete: Scalars['Int']['output'];
  product_model_product_description_create_batch: Array<ProductModelProductDescriptionBasic>;
  product_model_product_description_create_one: ProductModelProductDescriptionBasic;
  product_model_product_description_delete: Scalars['Int']['output'];
  product_model_product_description_update: Array<ProductModelProductDescriptionBasic>;
  product_model_update: Array<ProductModelBasic>;
  product_update: Array<ProductBasic>;
  sales_order_detail_create_batch: Array<SalesOrderDetailBasic>;
  sales_order_detail_create_one: SalesOrderDetailBasic;
  sales_order_detail_delete: Scalars['Int']['output'];
  sales_order_detail_update: Array<SalesOrderDetailBasic>;
  sales_order_header_create_batch: Array<SalesOrderHeaderBasic>;
  sales_order_header_create_one: SalesOrderHeaderBasic;
  sales_order_header_delete: Scalars['Int']['output'];
  sales_order_header_update: Array<SalesOrderHeaderBasic>;
};


export type MutationAddress_Create_BatchArgs = {
  data: Array<AddressInsertInput>;
};


export type MutationAddress_Create_OneArgs = {
  data: AddressInsertInput;
};


export type MutationAddress_DeleteArgs = {
  filter?: InputMaybe<AddressFilterInput>;
};


export type MutationAddress_UpdateArgs = {
  data: AddressUpdateInput;
  filter?: InputMaybe<AddressFilterInput>;
};


export type MutationCustomer_Address_Create_BatchArgs = {
  data: Array<CustomerAddressInsertInput>;
};


export type MutationCustomer_Address_Create_OneArgs = {
  data: CustomerAddressInsertInput;
};


export type MutationCustomer_Address_DeleteArgs = {
  filter?: InputMaybe<CustomerAddressFilterInput>;
};


export type MutationCustomer_Address_UpdateArgs = {
  data: CustomerAddressUpdateInput;
  filter?: InputMaybe<CustomerAddressFilterInput>;
};


export type MutationCustomer_Create_BatchArgs = {
  data: Array<CustomerInsertInput>;
};


export type MutationCustomer_Create_OneArgs = {
  data: CustomerInsertInput;
};


export type MutationCustomer_DeleteArgs = {
  filter?: InputMaybe<CustomerFilterInput>;
};


export type MutationCustomer_UpdateArgs = {
  data: CustomerUpdateInput;
  filter?: InputMaybe<CustomerFilterInput>;
};


export type MutationProduct_Category_Create_BatchArgs = {
  data: Array<ProductCategoryInsertInput>;
};


export type MutationProduct_Category_Create_OneArgs = {
  data: ProductCategoryInsertInput;
};


export type MutationProduct_Category_DeleteArgs = {
  filter?: InputMaybe<ProductCategoryFilterInput>;
};


export type MutationProduct_Category_UpdateArgs = {
  data: ProductCategoryUpdateInput;
  filter?: InputMaybe<ProductCategoryFilterInput>;
};


export type MutationProduct_Create_BatchArgs = {
  data: Array<ProductInsertInput>;
};


export type MutationProduct_Create_OneArgs = {
  data: ProductInsertInput;
};


export type MutationProduct_DeleteArgs = {
  filter?: InputMaybe<ProductFilterInput>;
};


export type MutationProduct_Description_Create_BatchArgs = {
  data: Array<ProductDescriptionInsertInput>;
};


export type MutationProduct_Description_Create_OneArgs = {
  data: ProductDescriptionInsertInput;
};


export type MutationProduct_Description_DeleteArgs = {
  filter?: InputMaybe<ProductDescriptionFilterInput>;
};


export type MutationProduct_Description_UpdateArgs = {
  data: ProductDescriptionUpdateInput;
  filter?: InputMaybe<ProductDescriptionFilterInput>;
};


export type MutationProduct_Model_Create_BatchArgs = {
  data: Array<ProductModelInsertInput>;
};


export type MutationProduct_Model_Create_OneArgs = {
  data: ProductModelInsertInput;
};


export type MutationProduct_Model_DeleteArgs = {
  filter?: InputMaybe<ProductModelFilterInput>;
};


export type MutationProduct_Model_Product_Description_Create_BatchArgs = {
  data: Array<ProductModelProductDescriptionInsertInput>;
};


export type MutationProduct_Model_Product_Description_Create_OneArgs = {
  data: ProductModelProductDescriptionInsertInput;
};


export type MutationProduct_Model_Product_Description_DeleteArgs = {
  filter?: InputMaybe<ProductModelProductDescriptionFilterInput>;
};


export type MutationProduct_Model_Product_Description_UpdateArgs = {
  data: ProductModelProductDescriptionUpdateInput;
  filter?: InputMaybe<ProductModelProductDescriptionFilterInput>;
};


export type MutationProduct_Model_UpdateArgs = {
  data: ProductModelUpdateInput;
  filter?: InputMaybe<ProductModelFilterInput>;
};


export type MutationProduct_UpdateArgs = {
  data: ProductUpdateInput;
  filter?: InputMaybe<ProductFilterInput>;
};


export type MutationSales_Order_Detail_Create_BatchArgs = {
  data: Array<SalesOrderDetailInsertInput>;
};


export type MutationSales_Order_Detail_Create_OneArgs = {
  data: SalesOrderDetailInsertInput;
};


export type MutationSales_Order_Detail_DeleteArgs = {
  filter?: InputMaybe<SalesOrderDetailFilterInput>;
};


export type MutationSales_Order_Detail_UpdateArgs = {
  data: SalesOrderDetailUpdateInput;
  filter?: InputMaybe<SalesOrderDetailFilterInput>;
};


export type MutationSales_Order_Header_Create_BatchArgs = {
  data: Array<SalesOrderHeaderInsertInput>;
};


export type MutationSales_Order_Header_Create_OneArgs = {
  data: SalesOrderHeaderInsertInput;
};


export type MutationSales_Order_Header_DeleteArgs = {
  filter?: InputMaybe<SalesOrderHeaderFilterInput>;
};


export type MutationSales_Order_Header_UpdateArgs = {
  data: SalesOrderHeaderUpdateInput;
  filter?: InputMaybe<SalesOrderHeaderFilterInput>;
};

export type OffsetInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  end_cursor?: Maybe<Scalars['String']['output']>;
  has_next_page: Scalars['Boolean']['output'];
  has_previous_page: Scalars['Boolean']['output'];
  start_cursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  current: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  cursor?: InputMaybe<CursorInput>;
  offset?: InputMaybe<OffsetInput>;
  page?: InputMaybe<PageInput>;
};

export type Product = {
  __typename?: 'Product';
  color?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  discontinued_date?: Maybe<Scalars['String']['output']>;
  list_price: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  product_category?: Maybe<ProductCategory>;
  product_category_id?: Maybe<Scalars['Int']['output']>;
  product_id: Scalars['Int']['output'];
  product_model?: Maybe<ProductModel>;
  product_model_id?: Maybe<Scalars['Int']['output']>;
  product_number: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_header: SalesOrderHeaderConnection;
  sell_end_date?: Maybe<Scalars['String']['output']>;
  sell_start_date: Scalars['String']['output'];
  size?: Maybe<Scalars['String']['output']>;
  standard_cost: Scalars['Float']['output'];
  thumb_nail_photo?: Maybe<Scalars['String']['output']>;
  thumbnail_photo_file_name?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};


export type ProductSales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductSales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductBasic = {
  __typename?: 'ProductBasic';
  color?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  discontinued_date?: Maybe<Scalars['String']['output']>;
  list_price: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  product_category_id?: Maybe<Scalars['Int']['output']>;
  product_id: Scalars['Int']['output'];
  product_model_id?: Maybe<Scalars['Int']['output']>;
  product_number: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  sell_end_date?: Maybe<Scalars['String']['output']>;
  sell_start_date: Scalars['String']['output'];
  size?: Maybe<Scalars['String']['output']>;
  standard_cost: Scalars['Float']['output'];
  thumb_nail_photo?: Maybe<Scalars['String']['output']>;
  thumbnail_photo_file_name?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent_product_category_id?: Maybe<Scalars['Int']['output']>;
  product: ProductConnection;
  product_category_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  self_ref?: Maybe<ProductCategory>;
  self_ref_reverse: ProductCategoryConnection;
};


export type ProductCategoryProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductCategorySelf_Ref_ReverseArgs = {
  filters?: InputMaybe<ProductCategoryFilterInput>;
  order_by?: InputMaybe<ProductCategoryOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductCategoryBasic = {
  __typename?: 'ProductCategoryBasic';
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent_product_category_id?: Maybe<Scalars['Int']['output']>;
  product_category_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  edges: Array<ProductCategoryEdge>;
  nodes: Array<ProductCategory>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductCategoryEdge = {
  __typename?: 'ProductCategoryEdge';
  cursor: Scalars['String']['output'];
  node: ProductCategory;
};

export type ProductCategoryFilterInput = {
  and?: InputMaybe<Array<ProductCategoryFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductCategoryFilterInput>>;
  parent_product_category_id?: InputMaybe<IntegerFilterInput>;
  product_category_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductCategoryInsertInput = {
  created_date: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parent_product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductCategoryOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  parent_product_category_id?: InputMaybe<OrderByEnum>;
  product_category_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductCategoryUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  nodes: Array<Product>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  created_date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  product_model_product_description: ProductModelProductDescriptionConnection;
  rowguid: Scalars['String']['output'];
};


export type ProductDescriptionProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductDescriptionBasic = {
  __typename?: 'ProductDescriptionBasic';
  created_date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductDescriptionConnection = {
  __typename?: 'ProductDescriptionConnection';
  edges: Array<ProductDescriptionEdge>;
  nodes: Array<ProductDescription>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductDescriptionEdge = {
  __typename?: 'ProductDescriptionEdge';
  cursor: Scalars['String']['output'];
  node: ProductDescription;
};

export type ProductDescriptionFilterInput = {
  and?: InputMaybe<Array<ProductDescriptionFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductDescriptionFilterInput>>;
  product_description_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductDescriptionInsertInput = {
  created_date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductDescriptionOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  description?: InputMaybe<OrderByEnum>;
  product_description_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductDescriptionUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  color?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  discontinued_date?: InputMaybe<TextFilterInput>;
  list_price?: InputMaybe<FloatFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  product_category_id?: InputMaybe<IntegerFilterInput>;
  product_id?: InputMaybe<IntegerFilterInput>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  product_number?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sell_end_date?: InputMaybe<TextFilterInput>;
  sell_start_date?: InputMaybe<TextFilterInput>;
  size?: InputMaybe<StringFilterInput>;
  standard_cost?: InputMaybe<FloatFilterInput>;
  thumb_nail_photo?: InputMaybe<StringFilterInput>;
  thumbnail_photo_file_name?: InputMaybe<StringFilterInput>;
  weight?: InputMaybe<TextFilterInput>;
};

export type ProductInsertInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  discontinued_date?: InputMaybe<Scalars['String']['input']>;
  list_price: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  product_number: Scalars['String']['input'];
  rowguid: Scalars['String']['input'];
  sell_end_date?: InputMaybe<Scalars['String']['input']>;
  sell_start_date: Scalars['String']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
  standard_cost: Scalars['Float']['input'];
  thumb_nail_photo?: InputMaybe<Scalars['String']['input']>;
  thumbnail_photo_file_name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type ProductModel = {
  __typename?: 'ProductModel';
  catalog_description?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: ProductConnection;
  product_description: ProductDescriptionConnection;
  product_model_id: Scalars['Int']['output'];
  product_model_product_description: ProductModelProductDescriptionConnection;
  rowguid: Scalars['String']['output'];
};


export type ProductModelProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductModelProduct_DescriptionArgs = {
  filters?: InputMaybe<ProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductModelProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductModelBasic = {
  __typename?: 'ProductModelBasic';
  catalog_description?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelConnection = {
  __typename?: 'ProductModelConnection';
  edges: Array<ProductModelEdge>;
  nodes: Array<ProductModel>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductModelEdge = {
  __typename?: 'ProductModelEdge';
  cursor: Scalars['String']['output'];
  node: ProductModel;
};

export type ProductModelFilterInput = {
  and?: InputMaybe<Array<ProductModelFilterInput>>;
  catalog_description?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductModelFilterInput>>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductModelInsertInput = {
  catalog_description?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductModelOrderInput = {
  catalog_description?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductModelProductDescription = {
  __typename?: 'ProductModelProductDescription';
  created_date: Scalars['String']['output'];
  culture: Scalars['String']['output'];
  product_description?: Maybe<ProductDescription>;
  product_description_id: Scalars['Int']['output'];
  product_model?: Maybe<ProductModel>;
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelProductDescriptionBasic = {
  __typename?: 'ProductModelProductDescriptionBasic';
  created_date: Scalars['String']['output'];
  culture: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelProductDescriptionConnection = {
  __typename?: 'ProductModelProductDescriptionConnection';
  edges: Array<ProductModelProductDescriptionEdge>;
  nodes: Array<ProductModelProductDescription>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductModelProductDescriptionEdge = {
  __typename?: 'ProductModelProductDescriptionEdge';
  cursor: Scalars['String']['output'];
  node: ProductModelProductDescription;
};

export type ProductModelProductDescriptionFilterInput = {
  and?: InputMaybe<Array<ProductModelProductDescriptionFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  culture?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductModelProductDescriptionFilterInput>>;
  product_description_id?: InputMaybe<IntegerFilterInput>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductModelProductDescriptionInsertInput = {
  created_date: Scalars['String']['input'];
  culture: Scalars['String']['input'];
  product_description_id: Scalars['Int']['input'];
  product_model_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
};

export type ProductModelProductDescriptionOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  culture?: InputMaybe<OrderByEnum>;
  product_description_id?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductModelProductDescriptionUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  culture?: InputMaybe<Scalars['String']['input']>;
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductModelUpdateInput = {
  catalog_description?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrderInput = {
  color?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  discontinued_date?: InputMaybe<OrderByEnum>;
  list_price?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  product_category_id?: InputMaybe<OrderByEnum>;
  product_id?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  product_number?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sell_end_date?: InputMaybe<OrderByEnum>;
  sell_start_date?: InputMaybe<OrderByEnum>;
  size?: InputMaybe<OrderByEnum>;
  standard_cost?: InputMaybe<OrderByEnum>;
  thumb_nail_photo?: InputMaybe<OrderByEnum>;
  thumbnail_photo_file_name?: InputMaybe<OrderByEnum>;
  weight?: InputMaybe<OrderByEnum>;
};

export type ProductUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  discontinued_date?: InputMaybe<Scalars['String']['input']>;
  list_price?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  product_number?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sell_end_date?: InputMaybe<Scalars['String']['input']>;
  sell_start_date?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  standard_cost?: InputMaybe<Scalars['Float']['input']>;
  thumb_nail_photo?: InputMaybe<Scalars['String']['input']>;
  thumbnail_photo_file_name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _sea_orm_entity_metadata?: Maybe<Scalars['String']['output']>;
  address: AddressConnection;
  customer: CustomerConnection;
  customer_address: CustomerAddressConnection;
  product: ProductConnection;
  product_category: ProductCategoryConnection;
  product_description: ProductDescriptionConnection;
  product_model: ProductModelConnection;
  product_model_product_description: ProductModelProductDescriptionConnection;
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_header: SalesOrderHeaderConnection;
};


export type Query_Sea_Orm_Entity_MetadataArgs = {
  table_name: Scalars['String']['input'];
};


export type QueryAddressArgs = {
  filters?: InputMaybe<AddressFilterInput>;
  order_by?: InputMaybe<AddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomerArgs = {
  filters?: InputMaybe<CustomerFilterInput>;
  order_by?: InputMaybe<CustomerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_CategoryArgs = {
  filters?: InputMaybe<ProductCategoryFilterInput>;
  order_by?: InputMaybe<ProductCategoryOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_DescriptionArgs = {
  filters?: InputMaybe<ProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_ModelArgs = {
  filters?: InputMaybe<ProductModelFilterInput>;
  order_by?: InputMaybe<ProductModelOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type SalesOrderDetail = {
  __typename?: 'SalesOrderDetail';
  created_date: Scalars['String']['output'];
  order_qty: Scalars['Int']['output'];
  product?: Maybe<Product>;
  product_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail_id: Scalars['Int']['output'];
  sales_order_header?: Maybe<SalesOrderHeader>;
  sales_order_id: Scalars['Int']['output'];
  unit_price: Scalars['Float']['output'];
  unit_price_discount: Scalars['Float']['output'];
};

export type SalesOrderDetailBasic = {
  __typename?: 'SalesOrderDetailBasic';
  created_date: Scalars['String']['output'];
  order_qty: Scalars['Int']['output'];
  product_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail_id: Scalars['Int']['output'];
  sales_order_id: Scalars['Int']['output'];
  unit_price: Scalars['Float']['output'];
  unit_price_discount: Scalars['Float']['output'];
};

export type SalesOrderDetailConnection = {
  __typename?: 'SalesOrderDetailConnection';
  edges: Array<SalesOrderDetailEdge>;
  nodes: Array<SalesOrderDetail>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type SalesOrderDetailEdge = {
  __typename?: 'SalesOrderDetailEdge';
  cursor: Scalars['String']['output'];
  node: SalesOrderDetail;
};

export type SalesOrderDetailFilterInput = {
  and?: InputMaybe<Array<SalesOrderDetailFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  or?: InputMaybe<Array<SalesOrderDetailFilterInput>>;
  order_qty?: InputMaybe<IntegerFilterInput>;
  product_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_order_detail_id?: InputMaybe<IntegerFilterInput>;
  sales_order_id?: InputMaybe<IntegerFilterInput>;
  unit_price?: InputMaybe<FloatFilterInput>;
  unit_price_discount?: InputMaybe<FloatFilterInput>;
};

export type SalesOrderDetailInsertInput = {
  created_date: Scalars['String']['input'];
  order_qty: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
  sales_order_detail_id: Scalars['Int']['input'];
  sales_order_id: Scalars['Int']['input'];
  unit_price: Scalars['Float']['input'];
  unit_price_discount: Scalars['Float']['input'];
};

export type SalesOrderDetailOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  order_qty?: InputMaybe<OrderByEnum>;
  product_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_order_detail_id?: InputMaybe<OrderByEnum>;
  sales_order_id?: InputMaybe<OrderByEnum>;
  unit_price?: InputMaybe<OrderByEnum>;
  unit_price_discount?: InputMaybe<OrderByEnum>;
};

export type SalesOrderDetailUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  order_qty?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_order_detail_id?: InputMaybe<Scalars['Int']['input']>;
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  unit_price_discount?: InputMaybe<Scalars['Float']['input']>;
};

export type SalesOrderHeader = {
  __typename?: 'SalesOrderHeader';
  account_number?: Maybe<Scalars['String']['output']>;
  address1?: Maybe<Address>;
  address2?: Maybe<Address>;
  bill_to_address_id?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  credit_card_approval_code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customer_id: Scalars['Int']['output'];
  due_date: Scalars['String']['output'];
  freight: Scalars['Float']['output'];
  online_order_flag: Scalars['Boolean']['output'];
  order_date: Scalars['String']['output'];
  product: ProductConnection;
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  revision_number: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_id: Scalars['Int']['output'];
  ship_date?: Maybe<Scalars['String']['output']>;
  ship_method: Scalars['String']['output'];
  ship_to_address_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  sub_total: Scalars['Float']['output'];
  tax_amt: Scalars['Float']['output'];
};


export type SalesOrderHeaderProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type SalesOrderHeaderSales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type SalesOrderHeaderBasic = {
  __typename?: 'SalesOrderHeaderBasic';
  account_number?: Maybe<Scalars['String']['output']>;
  bill_to_address_id?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  credit_card_approval_code?: Maybe<Scalars['String']['output']>;
  customer_id: Scalars['Int']['output'];
  due_date: Scalars['String']['output'];
  freight: Scalars['Float']['output'];
  online_order_flag: Scalars['Boolean']['output'];
  order_date: Scalars['String']['output'];
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  revision_number: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_id: Scalars['Int']['output'];
  ship_date?: Maybe<Scalars['String']['output']>;
  ship_method: Scalars['String']['output'];
  ship_to_address_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  sub_total: Scalars['Float']['output'];
  tax_amt: Scalars['Float']['output'];
};

export type SalesOrderHeaderConnection = {
  __typename?: 'SalesOrderHeaderConnection';
  edges: Array<SalesOrderHeaderEdge>;
  nodes: Array<SalesOrderHeader>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type SalesOrderHeaderEdge = {
  __typename?: 'SalesOrderHeaderEdge';
  cursor: Scalars['String']['output'];
  node: SalesOrderHeader;
};

export type SalesOrderHeaderFilterInput = {
  account_number?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<SalesOrderHeaderFilterInput>>;
  bill_to_address_id?: InputMaybe<IntegerFilterInput>;
  comment?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  credit_card_approval_code?: InputMaybe<StringFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  due_date?: InputMaybe<TextFilterInput>;
  freight?: InputMaybe<FloatFilterInput>;
  online_order_flag?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<SalesOrderHeaderFilterInput>>;
  order_date?: InputMaybe<TextFilterInput>;
  purchase_order_number?: InputMaybe<StringFilterInput>;
  revision_number?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_order_id?: InputMaybe<IntegerFilterInput>;
  ship_date?: InputMaybe<TextFilterInput>;
  ship_method?: InputMaybe<StringFilterInput>;
  ship_to_address_id?: InputMaybe<IntegerFilterInput>;
  status?: InputMaybe<IntegerFilterInput>;
  sub_total?: InputMaybe<FloatFilterInput>;
  tax_amt?: InputMaybe<FloatFilterInput>;
};

export type SalesOrderHeaderInsertInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bill_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  credit_card_approval_code?: InputMaybe<Scalars['String']['input']>;
  customer_id: Scalars['Int']['input'];
  due_date: Scalars['String']['input'];
  freight: Scalars['Float']['input'];
  online_order_flag: Scalars['Boolean']['input'];
  order_date: Scalars['String']['input'];
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
  revision_number: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  ship_method: Scalars['String']['input'];
  ship_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
  sub_total: Scalars['Float']['input'];
  tax_amt: Scalars['Float']['input'];
};

export type SalesOrderHeaderOrderInput = {
  account_number?: InputMaybe<OrderByEnum>;
  bill_to_address_id?: InputMaybe<OrderByEnum>;
  comment?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  credit_card_approval_code?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  due_date?: InputMaybe<OrderByEnum>;
  freight?: InputMaybe<OrderByEnum>;
  online_order_flag?: InputMaybe<OrderByEnum>;
  order_date?: InputMaybe<OrderByEnum>;
  purchase_order_number?: InputMaybe<OrderByEnum>;
  revision_number?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_order_id?: InputMaybe<OrderByEnum>;
  ship_date?: InputMaybe<OrderByEnum>;
  ship_method?: InputMaybe<OrderByEnum>;
  ship_to_address_id?: InputMaybe<OrderByEnum>;
  status?: InputMaybe<OrderByEnum>;
  sub_total?: InputMaybe<OrderByEnum>;
  tax_amt?: InputMaybe<OrderByEnum>;
};

export type SalesOrderHeaderUpdateInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bill_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  credit_card_approval_code?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  due_date?: InputMaybe<Scalars['String']['input']>;
  freight?: InputMaybe<Scalars['Float']['input']>;
  online_order_flag?: InputMaybe<Scalars['Boolean']['input']>;
  order_date?: InputMaybe<Scalars['String']['input']>;
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
  revision_number?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  ship_method?: InputMaybe<Scalars['String']['input']>;
  ship_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  sub_total?: InputMaybe<Scalars['Float']['input']>;
  tax_amt?: InputMaybe<Scalars['Float']['input']>;
};

export type StringFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
  not_like?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TextFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Customer_ListQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  order_by?: InputMaybe<CustomerOrderInput>;
  filters?: InputMaybe<CustomerFilterInput>;
}>;


export type Customer_ListQuery = { __typename?: 'Query', customer: { __typename?: 'CustomerConnection', nodes: Array<{ __typename?: 'Customer', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number }>, pagination_info?: { __typename?: 'PaginationInfo', current: number, pages: number, offset: number, total: number } | null } };

export type Customer_OneQueryVariables = Exact<{
  filters?: InputMaybe<CustomerFilterInput>;
}>;


export type Customer_OneQuery = { __typename?: 'Query', customer: { __typename?: 'CustomerConnection', nodes: Array<{ __typename?: 'Customer', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number }> } };

export type Customer_ManyQueryVariables = Exact<{
  filters?: InputMaybe<CustomerFilterInput>;
}>;


export type Customer_ManyQuery = { __typename?: 'Query', customer: { __typename?: 'CustomerConnection', nodes: Array<{ __typename?: 'Customer', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number }> } };

export type Customer_Many_RefQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  filters?: InputMaybe<CustomerFilterInput>;
}>;


export type Customer_Many_RefQuery = { __typename?: 'Query', customer: { __typename?: 'CustomerConnection', nodes: Array<{ __typename?: 'Customer', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number }>, pagination_info?: { __typename?: 'PaginationInfo', current: number, pages: number, offset: number, total: number } | null } };

export type Mutation_Customer_Create_OneMutationVariables = Exact<{
  data: CustomerInsertInput;
}>;


export type Mutation_Customer_Create_OneMutation = { __typename?: 'Mutation', customer_create_one: { __typename?: 'CustomerBasic', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number } };

export type Mutation_Customer_UpdateMutationVariables = Exact<{
  data: CustomerUpdateInput;
  filter?: InputMaybe<CustomerFilterInput>;
}>;


export type Mutation_Customer_UpdateMutation = { __typename?: 'Mutation', customer_update: Array<{ __typename?: 'CustomerBasic', title?: string | null, first_name: string, middle_name?: string | null, last_name: string, name_style: boolean, suffix?: string | null, company_name?: string | null, sales_person?: string | null, email_address?: string | null, phone?: string | null, rowguid: string, created_date: string, id: number }> };

export type Mutation_Customer_DeleteMutationVariables = Exact<{
  filter?: InputMaybe<CustomerFilterInput>;
}>;


export type Mutation_Customer_DeleteMutation = { __typename?: 'Mutation', customer_delete: number };


export const Customer_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customer_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerOrderInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<Customer_ListQuery, Customer_ListQueryVariables>;
export const Customer_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customer_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}}]}}]}}]} as unknown as DocumentNode<Customer_OneQuery, Customer_OneQueryVariables>;
export const Customer_ManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customer_many"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}}]}}]}}]} as unknown as DocumentNode<Customer_ManyQuery, Customer_ManyQueryVariables>;
export const Customer_Many_RefDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customer_many_ref"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<Customer_Many_RefQuery, Customer_Many_RefQueryVariables>;
export const Mutation_Customer_Create_OneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_customer_create_one"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_create_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}}]}}]} as unknown as DocumentNode<Mutation_Customer_Create_OneMutation, Mutation_Customer_Create_OneMutationVariables>;
export const Mutation_Customer_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_customer_update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"middle_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"name_style"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"sales_person"}},{"kind":"Field","name":{"kind":"Name","value":"email_address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rowguid"}},{"kind":"Field","name":{"kind":"Name","value":"created_date"}}]}}]}}]} as unknown as DocumentNode<Mutation_Customer_UpdateMutation, Mutation_Customer_UpdateMutationVariables>;
export const Mutation_Customer_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"mutation_customer_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}]}]}}]} as unknown as DocumentNode<Mutation_Customer_DeleteMutation, Mutation_Customer_DeleteMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  address_id: Scalars['Int']['output'];
  address_line1: Scalars['String']['output'];
  address_line2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country_region: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer: CustomerConnection;
  customer_address: CustomerAddressConnection;
  postal_code: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  state_province: Scalars['String']['output'];
};


export type AddressCustomerArgs = {
  filters?: InputMaybe<CustomerFilterInput>;
  order_by?: InputMaybe<CustomerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type AddressCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type AddressBasic = {
  __typename?: 'AddressBasic';
  address_id: Scalars['Int']['output'];
  address_line1: Scalars['String']['output'];
  address_line2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country_region: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  postal_code: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  state_province: Scalars['String']['output'];
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  edges: Array<AddressEdge>;
  nodes: Array<Address>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type AddressFilterInput = {
  address_id?: InputMaybe<IntegerFilterInput>;
  address_line1?: InputMaybe<StringFilterInput>;
  address_line2?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<AddressFilterInput>>;
  city?: InputMaybe<StringFilterInput>;
  country_region?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  or?: InputMaybe<Array<AddressFilterInput>>;
  postal_code?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  state_province?: InputMaybe<StringFilterInput>;
};

export type AddressInsertInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_line1: Scalars['String']['input'];
  address_line2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country_region: Scalars['String']['input'];
  created_date: Scalars['String']['input'];
  postal_code: Scalars['String']['input'];
  rowguid: Scalars['String']['input'];
  state_province: Scalars['String']['input'];
};

export type AddressOrderInput = {
  address_id?: InputMaybe<OrderByEnum>;
  address_line1?: InputMaybe<OrderByEnum>;
  address_line2?: InputMaybe<OrderByEnum>;
  city?: InputMaybe<OrderByEnum>;
  country_region?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  postal_code?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  state_province?: InputMaybe<OrderByEnum>;
};

export type AddressUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country_region?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  state_province?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  is_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is_not_null?: InputMaybe<Scalars['Boolean']['input']>;
  is_null?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CursorInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  address: AddressConnection;
  company_name?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  customer_address: CustomerAddressConnection;
  customer_id: Scalars['Int']['output'];
  email_address?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  middle_name?: Maybe<Scalars['String']['output']>;
  name_style: Scalars['Boolean']['output'];
  password_hash: Scalars['String']['output'];
  password_salt: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['String']['output'];
  sales_order_header: SalesOrderHeaderConnection;
  sales_person?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CustomerAddressArgs = {
  filters?: InputMaybe<AddressFilterInput>;
  order_by?: InputMaybe<AddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type CustomerCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type CustomerSales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  address?: Maybe<Address>;
  address_id: Scalars['Int']['output'];
  address_type: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customer_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type CustomerAddressBasic = {
  __typename?: 'CustomerAddressBasic';
  address_id: Scalars['Int']['output'];
  address_type: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  customer_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  edges: Array<CustomerAddressEdge>;
  nodes: Array<CustomerAddress>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type CustomerAddressEdge = {
  __typename?: 'CustomerAddressEdge';
  cursor: Scalars['String']['output'];
  node: CustomerAddress;
};

export type CustomerAddressFilterInput = {
  address_id?: InputMaybe<IntegerFilterInput>;
  address_type?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<CustomerAddressFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  or?: InputMaybe<Array<CustomerAddressFilterInput>>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type CustomerAddressInsertInput = {
  address_id: Scalars['Int']['input'];
  address_type: Scalars['String']['input'];
  created_date: Scalars['String']['input'];
  customer_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
};

export type CustomerAddressOrderInput = {
  address_id?: InputMaybe<OrderByEnum>;
  address_type?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type CustomerAddressUpdateInput = {
  address_id?: InputMaybe<Scalars['Int']['input']>;
  address_type?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerBasic = {
  __typename?: 'CustomerBasic';
  company_name?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  customer_id: Scalars['Int']['output'];
  email_address?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  middle_name?: Maybe<Scalars['String']['output']>;
  name_style: Scalars['Boolean']['output'];
  password_hash: Scalars['String']['output'];
  password_salt: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  rowguid: Scalars['String']['output'];
  sales_person?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  nodes: Array<Customer>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type CustomerFilterInput = {
  and?: InputMaybe<Array<CustomerFilterInput>>;
  company_name?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  email_address?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  middle_name?: InputMaybe<StringFilterInput>;
  name_style?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  password_hash?: InputMaybe<StringFilterInput>;
  password_salt?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_person?: InputMaybe<StringFilterInput>;
  suffix?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type CustomerInsertInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email_address?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name_style: Scalars['Boolean']['input'];
  password_hash: Scalars['String']['input'];
  password_salt: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  rowguid: Scalars['String']['input'];
  sales_person?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerOrderInput = {
  company_name?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  email_address?: InputMaybe<OrderByEnum>;
  first_name?: InputMaybe<OrderByEnum>;
  last_name?: InputMaybe<OrderByEnum>;
  middle_name?: InputMaybe<OrderByEnum>;
  name_style?: InputMaybe<OrderByEnum>;
  password_hash?: InputMaybe<OrderByEnum>;
  password_salt?: InputMaybe<OrderByEnum>;
  phone?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_person?: InputMaybe<OrderByEnum>;
  suffix?: InputMaybe<OrderByEnum>;
  title?: InputMaybe<OrderByEnum>;
};

export type CustomerUpdateInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email_address?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name_style?: InputMaybe<Scalars['Boolean']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  password_salt?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_person?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  between?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  is_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_not_null?: InputMaybe<Scalars['Float']['input']>;
  is_null?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not_between?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntegerFilterInput = {
  between?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  is_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_not_null?: InputMaybe<Scalars['Int']['input']>;
  is_null?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not_between?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _ping?: Maybe<Scalars['String']['output']>;
  address_create_batch: Array<AddressBasic>;
  address_create_one: AddressBasic;
  address_delete: Scalars['Int']['output'];
  address_update: Array<AddressBasic>;
  customer_address_create_batch: Array<CustomerAddressBasic>;
  customer_address_create_one: CustomerAddressBasic;
  customer_address_delete: Scalars['Int']['output'];
  customer_address_update: Array<CustomerAddressBasic>;
  customer_create_batch: Array<CustomerBasic>;
  customer_create_one: CustomerBasic;
  customer_delete: Scalars['Int']['output'];
  customer_update: Array<CustomerBasic>;
  product_category_create_batch: Array<ProductCategoryBasic>;
  product_category_create_one: ProductCategoryBasic;
  product_category_delete: Scalars['Int']['output'];
  product_category_update: Array<ProductCategoryBasic>;
  product_create_batch: Array<ProductBasic>;
  product_create_one: ProductBasic;
  product_delete: Scalars['Int']['output'];
  product_description_create_batch: Array<ProductDescriptionBasic>;
  product_description_create_one: ProductDescriptionBasic;
  product_description_delete: Scalars['Int']['output'];
  product_description_update: Array<ProductDescriptionBasic>;
  product_model_create_batch: Array<ProductModelBasic>;
  product_model_create_one: ProductModelBasic;
  product_model_delete: Scalars['Int']['output'];
  product_model_product_description_create_batch: Array<ProductModelProductDescriptionBasic>;
  product_model_product_description_create_one: ProductModelProductDescriptionBasic;
  product_model_product_description_delete: Scalars['Int']['output'];
  product_model_product_description_update: Array<ProductModelProductDescriptionBasic>;
  product_model_update: Array<ProductModelBasic>;
  product_update: Array<ProductBasic>;
  sales_order_detail_create_batch: Array<SalesOrderDetailBasic>;
  sales_order_detail_create_one: SalesOrderDetailBasic;
  sales_order_detail_delete: Scalars['Int']['output'];
  sales_order_detail_update: Array<SalesOrderDetailBasic>;
  sales_order_header_create_batch: Array<SalesOrderHeaderBasic>;
  sales_order_header_create_one: SalesOrderHeaderBasic;
  sales_order_header_delete: Scalars['Int']['output'];
  sales_order_header_update: Array<SalesOrderHeaderBasic>;
};


export type MutationAddress_Create_BatchArgs = {
  data: Array<AddressInsertInput>;
};


export type MutationAddress_Create_OneArgs = {
  data: AddressInsertInput;
};


export type MutationAddress_DeleteArgs = {
  filter?: InputMaybe<AddressFilterInput>;
};


export type MutationAddress_UpdateArgs = {
  data: AddressUpdateInput;
  filter?: InputMaybe<AddressFilterInput>;
};


export type MutationCustomer_Address_Create_BatchArgs = {
  data: Array<CustomerAddressInsertInput>;
};


export type MutationCustomer_Address_Create_OneArgs = {
  data: CustomerAddressInsertInput;
};


export type MutationCustomer_Address_DeleteArgs = {
  filter?: InputMaybe<CustomerAddressFilterInput>;
};


export type MutationCustomer_Address_UpdateArgs = {
  data: CustomerAddressUpdateInput;
  filter?: InputMaybe<CustomerAddressFilterInput>;
};


export type MutationCustomer_Create_BatchArgs = {
  data: Array<CustomerInsertInput>;
};


export type MutationCustomer_Create_OneArgs = {
  data: CustomerInsertInput;
};


export type MutationCustomer_DeleteArgs = {
  filter?: InputMaybe<CustomerFilterInput>;
};


export type MutationCustomer_UpdateArgs = {
  data: CustomerUpdateInput;
  filter?: InputMaybe<CustomerFilterInput>;
};


export type MutationProduct_Category_Create_BatchArgs = {
  data: Array<ProductCategoryInsertInput>;
};


export type MutationProduct_Category_Create_OneArgs = {
  data: ProductCategoryInsertInput;
};


export type MutationProduct_Category_DeleteArgs = {
  filter?: InputMaybe<ProductCategoryFilterInput>;
};


export type MutationProduct_Category_UpdateArgs = {
  data: ProductCategoryUpdateInput;
  filter?: InputMaybe<ProductCategoryFilterInput>;
};


export type MutationProduct_Create_BatchArgs = {
  data: Array<ProductInsertInput>;
};


export type MutationProduct_Create_OneArgs = {
  data: ProductInsertInput;
};


export type MutationProduct_DeleteArgs = {
  filter?: InputMaybe<ProductFilterInput>;
};


export type MutationProduct_Description_Create_BatchArgs = {
  data: Array<ProductDescriptionInsertInput>;
};


export type MutationProduct_Description_Create_OneArgs = {
  data: ProductDescriptionInsertInput;
};


export type MutationProduct_Description_DeleteArgs = {
  filter?: InputMaybe<ProductDescriptionFilterInput>;
};


export type MutationProduct_Description_UpdateArgs = {
  data: ProductDescriptionUpdateInput;
  filter?: InputMaybe<ProductDescriptionFilterInput>;
};


export type MutationProduct_Model_Create_BatchArgs = {
  data: Array<ProductModelInsertInput>;
};


export type MutationProduct_Model_Create_OneArgs = {
  data: ProductModelInsertInput;
};


export type MutationProduct_Model_DeleteArgs = {
  filter?: InputMaybe<ProductModelFilterInput>;
};


export type MutationProduct_Model_Product_Description_Create_BatchArgs = {
  data: Array<ProductModelProductDescriptionInsertInput>;
};


export type MutationProduct_Model_Product_Description_Create_OneArgs = {
  data: ProductModelProductDescriptionInsertInput;
};


export type MutationProduct_Model_Product_Description_DeleteArgs = {
  filter?: InputMaybe<ProductModelProductDescriptionFilterInput>;
};


export type MutationProduct_Model_Product_Description_UpdateArgs = {
  data: ProductModelProductDescriptionUpdateInput;
  filter?: InputMaybe<ProductModelProductDescriptionFilterInput>;
};


export type MutationProduct_Model_UpdateArgs = {
  data: ProductModelUpdateInput;
  filter?: InputMaybe<ProductModelFilterInput>;
};


export type MutationProduct_UpdateArgs = {
  data: ProductUpdateInput;
  filter?: InputMaybe<ProductFilterInput>;
};


export type MutationSales_Order_Detail_Create_BatchArgs = {
  data: Array<SalesOrderDetailInsertInput>;
};


export type MutationSales_Order_Detail_Create_OneArgs = {
  data: SalesOrderDetailInsertInput;
};


export type MutationSales_Order_Detail_DeleteArgs = {
  filter?: InputMaybe<SalesOrderDetailFilterInput>;
};


export type MutationSales_Order_Detail_UpdateArgs = {
  data: SalesOrderDetailUpdateInput;
  filter?: InputMaybe<SalesOrderDetailFilterInput>;
};


export type MutationSales_Order_Header_Create_BatchArgs = {
  data: Array<SalesOrderHeaderInsertInput>;
};


export type MutationSales_Order_Header_Create_OneArgs = {
  data: SalesOrderHeaderInsertInput;
};


export type MutationSales_Order_Header_DeleteArgs = {
  filter?: InputMaybe<SalesOrderHeaderFilterInput>;
};


export type MutationSales_Order_Header_UpdateArgs = {
  data: SalesOrderHeaderUpdateInput;
  filter?: InputMaybe<SalesOrderHeaderFilterInput>;
};

export type OffsetInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  end_cursor?: Maybe<Scalars['String']['output']>;
  has_next_page: Scalars['Boolean']['output'];
  has_previous_page: Scalars['Boolean']['output'];
  start_cursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  current: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  cursor?: InputMaybe<CursorInput>;
  offset?: InputMaybe<OffsetInput>;
  page?: InputMaybe<PageInput>;
};

export type Product = {
  __typename?: 'Product';
  color?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  discontinued_date?: Maybe<Scalars['String']['output']>;
  list_price: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  product_category?: Maybe<ProductCategory>;
  product_category_id?: Maybe<Scalars['Int']['output']>;
  product_id: Scalars['Int']['output'];
  product_model?: Maybe<ProductModel>;
  product_model_id?: Maybe<Scalars['Int']['output']>;
  product_number: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_header: SalesOrderHeaderConnection;
  sell_end_date?: Maybe<Scalars['String']['output']>;
  sell_start_date: Scalars['String']['output'];
  size?: Maybe<Scalars['String']['output']>;
  standard_cost: Scalars['Float']['output'];
  thumb_nail_photo?: Maybe<Scalars['String']['output']>;
  thumbnail_photo_file_name?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};


export type ProductSales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductSales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductBasic = {
  __typename?: 'ProductBasic';
  color?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  discontinued_date?: Maybe<Scalars['String']['output']>;
  list_price: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  product_category_id?: Maybe<Scalars['Int']['output']>;
  product_id: Scalars['Int']['output'];
  product_model_id?: Maybe<Scalars['Int']['output']>;
  product_number: Scalars['String']['output'];
  rowguid: Scalars['String']['output'];
  sell_end_date?: Maybe<Scalars['String']['output']>;
  sell_start_date: Scalars['String']['output'];
  size?: Maybe<Scalars['String']['output']>;
  standard_cost: Scalars['Float']['output'];
  thumb_nail_photo?: Maybe<Scalars['String']['output']>;
  thumbnail_photo_file_name?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent_product_category_id?: Maybe<Scalars['Int']['output']>;
  product: ProductConnection;
  product_category_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  self_ref?: Maybe<ProductCategory>;
  self_ref_reverse: ProductCategoryConnection;
};


export type ProductCategoryProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductCategorySelf_Ref_ReverseArgs = {
  filters?: InputMaybe<ProductCategoryFilterInput>;
  order_by?: InputMaybe<ProductCategoryOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductCategoryBasic = {
  __typename?: 'ProductCategoryBasic';
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent_product_category_id?: Maybe<Scalars['Int']['output']>;
  product_category_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  edges: Array<ProductCategoryEdge>;
  nodes: Array<ProductCategory>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductCategoryEdge = {
  __typename?: 'ProductCategoryEdge';
  cursor: Scalars['String']['output'];
  node: ProductCategory;
};

export type ProductCategoryFilterInput = {
  and?: InputMaybe<Array<ProductCategoryFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductCategoryFilterInput>>;
  parent_product_category_id?: InputMaybe<IntegerFilterInput>;
  product_category_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductCategoryInsertInput = {
  created_date: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parent_product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductCategoryOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  parent_product_category_id?: InputMaybe<OrderByEnum>;
  product_category_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductCategoryUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  nodes: Array<Product>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  created_date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  product_model_product_description: ProductModelProductDescriptionConnection;
  rowguid: Scalars['String']['output'];
};


export type ProductDescriptionProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductDescriptionBasic = {
  __typename?: 'ProductDescriptionBasic';
  created_date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductDescriptionConnection = {
  __typename?: 'ProductDescriptionConnection';
  edges: Array<ProductDescriptionEdge>;
  nodes: Array<ProductDescription>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductDescriptionEdge = {
  __typename?: 'ProductDescriptionEdge';
  cursor: Scalars['String']['output'];
  node: ProductDescription;
};

export type ProductDescriptionFilterInput = {
  and?: InputMaybe<Array<ProductDescriptionFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductDescriptionFilterInput>>;
  product_description_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductDescriptionInsertInput = {
  created_date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductDescriptionOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  description?: InputMaybe<OrderByEnum>;
  product_description_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductDescriptionUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  color?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  discontinued_date?: InputMaybe<TextFilterInput>;
  list_price?: InputMaybe<FloatFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  product_category_id?: InputMaybe<IntegerFilterInput>;
  product_id?: InputMaybe<IntegerFilterInput>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  product_number?: InputMaybe<StringFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sell_end_date?: InputMaybe<TextFilterInput>;
  sell_start_date?: InputMaybe<TextFilterInput>;
  size?: InputMaybe<StringFilterInput>;
  standard_cost?: InputMaybe<FloatFilterInput>;
  thumb_nail_photo?: InputMaybe<StringFilterInput>;
  thumbnail_photo_file_name?: InputMaybe<StringFilterInput>;
  weight?: InputMaybe<TextFilterInput>;
};

export type ProductInsertInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  discontinued_date?: InputMaybe<Scalars['String']['input']>;
  list_price: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  product_number: Scalars['String']['input'];
  rowguid: Scalars['String']['input'];
  sell_end_date?: InputMaybe<Scalars['String']['input']>;
  sell_start_date: Scalars['String']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
  standard_cost: Scalars['Float']['input'];
  thumb_nail_photo?: InputMaybe<Scalars['String']['input']>;
  thumbnail_photo_file_name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type ProductModel = {
  __typename?: 'ProductModel';
  catalog_description?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: ProductConnection;
  product_description: ProductDescriptionConnection;
  product_model_id: Scalars['Int']['output'];
  product_model_product_description: ProductModelProductDescriptionConnection;
  rowguid: Scalars['String']['output'];
};


export type ProductModelProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductModelProduct_DescriptionArgs = {
  filters?: InputMaybe<ProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ProductModelProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductModelBasic = {
  __typename?: 'ProductModelBasic';
  catalog_description?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelConnection = {
  __typename?: 'ProductModelConnection';
  edges: Array<ProductModelEdge>;
  nodes: Array<ProductModel>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductModelEdge = {
  __typename?: 'ProductModelEdge';
  cursor: Scalars['String']['output'];
  node: ProductModel;
};

export type ProductModelFilterInput = {
  and?: InputMaybe<Array<ProductModelFilterInput>>;
  catalog_description?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductModelFilterInput>>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductModelInsertInput = {
  catalog_description?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid: Scalars['String']['input'];
};

export type ProductModelOrderInput = {
  catalog_description?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductModelProductDescription = {
  __typename?: 'ProductModelProductDescription';
  created_date: Scalars['String']['output'];
  culture: Scalars['String']['output'];
  product_description?: Maybe<ProductDescription>;
  product_description_id: Scalars['Int']['output'];
  product_model?: Maybe<ProductModel>;
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelProductDescriptionBasic = {
  __typename?: 'ProductModelProductDescriptionBasic';
  created_date: Scalars['String']['output'];
  culture: Scalars['String']['output'];
  product_description_id: Scalars['Int']['output'];
  product_model_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
};

export type ProductModelProductDescriptionConnection = {
  __typename?: 'ProductModelProductDescriptionConnection';
  edges: Array<ProductModelProductDescriptionEdge>;
  nodes: Array<ProductModelProductDescription>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type ProductModelProductDescriptionEdge = {
  __typename?: 'ProductModelProductDescriptionEdge';
  cursor: Scalars['String']['output'];
  node: ProductModelProductDescription;
};

export type ProductModelProductDescriptionFilterInput = {
  and?: InputMaybe<Array<ProductModelProductDescriptionFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  culture?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<ProductModelProductDescriptionFilterInput>>;
  product_description_id?: InputMaybe<IntegerFilterInput>;
  product_model_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
};

export type ProductModelProductDescriptionInsertInput = {
  created_date: Scalars['String']['input'];
  culture: Scalars['String']['input'];
  product_description_id: Scalars['Int']['input'];
  product_model_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
};

export type ProductModelProductDescriptionOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  culture?: InputMaybe<OrderByEnum>;
  product_description_id?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
};

export type ProductModelProductDescriptionUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  culture?: InputMaybe<Scalars['String']['input']>;
  product_description_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductModelUpdateInput = {
  catalog_description?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrderInput = {
  color?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  discontinued_date?: InputMaybe<OrderByEnum>;
  list_price?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  product_category_id?: InputMaybe<OrderByEnum>;
  product_id?: InputMaybe<OrderByEnum>;
  product_model_id?: InputMaybe<OrderByEnum>;
  product_number?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sell_end_date?: InputMaybe<OrderByEnum>;
  sell_start_date?: InputMaybe<OrderByEnum>;
  size?: InputMaybe<OrderByEnum>;
  standard_cost?: InputMaybe<OrderByEnum>;
  thumb_nail_photo?: InputMaybe<OrderByEnum>;
  thumbnail_photo_file_name?: InputMaybe<OrderByEnum>;
  weight?: InputMaybe<OrderByEnum>;
};

export type ProductUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  discontinued_date?: InputMaybe<Scalars['String']['input']>;
  list_price?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_category_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  product_model_id?: InputMaybe<Scalars['Int']['input']>;
  product_number?: InputMaybe<Scalars['String']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sell_end_date?: InputMaybe<Scalars['String']['input']>;
  sell_start_date?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  standard_cost?: InputMaybe<Scalars['Float']['input']>;
  thumb_nail_photo?: InputMaybe<Scalars['String']['input']>;
  thumbnail_photo_file_name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _sea_orm_entity_metadata?: Maybe<Scalars['String']['output']>;
  address: AddressConnection;
  customer: CustomerConnection;
  customer_address: CustomerAddressConnection;
  product: ProductConnection;
  product_category: ProductCategoryConnection;
  product_description: ProductDescriptionConnection;
  product_model: ProductModelConnection;
  product_model_product_description: ProductModelProductDescriptionConnection;
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_header: SalesOrderHeaderConnection;
};


export type Query_Sea_Orm_Entity_MetadataArgs = {
  table_name: Scalars['String']['input'];
};


export type QueryAddressArgs = {
  filters?: InputMaybe<AddressFilterInput>;
  order_by?: InputMaybe<AddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomerArgs = {
  filters?: InputMaybe<CustomerFilterInput>;
  order_by?: InputMaybe<CustomerOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCustomer_AddressArgs = {
  filters?: InputMaybe<CustomerAddressFilterInput>;
  order_by?: InputMaybe<CustomerAddressOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_CategoryArgs = {
  filters?: InputMaybe<ProductCategoryFilterInput>;
  order_by?: InputMaybe<ProductCategoryOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_DescriptionArgs = {
  filters?: InputMaybe<ProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_ModelArgs = {
  filters?: InputMaybe<ProductModelFilterInput>;
  order_by?: InputMaybe<ProductModelOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProduct_Model_Product_DescriptionArgs = {
  filters?: InputMaybe<ProductModelProductDescriptionFilterInput>;
  order_by?: InputMaybe<ProductModelProductDescriptionOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySales_Order_HeaderArgs = {
  filters?: InputMaybe<SalesOrderHeaderFilterInput>;
  order_by?: InputMaybe<SalesOrderHeaderOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type SalesOrderDetail = {
  __typename?: 'SalesOrderDetail';
  created_date: Scalars['String']['output'];
  order_qty: Scalars['Int']['output'];
  product?: Maybe<Product>;
  product_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail_id: Scalars['Int']['output'];
  sales_order_header?: Maybe<SalesOrderHeader>;
  sales_order_id: Scalars['Int']['output'];
  unit_price: Scalars['Float']['output'];
  unit_price_discount: Scalars['Float']['output'];
};

export type SalesOrderDetailBasic = {
  __typename?: 'SalesOrderDetailBasic';
  created_date: Scalars['String']['output'];
  order_qty: Scalars['Int']['output'];
  product_id: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail_id: Scalars['Int']['output'];
  sales_order_id: Scalars['Int']['output'];
  unit_price: Scalars['Float']['output'];
  unit_price_discount: Scalars['Float']['output'];
};

export type SalesOrderDetailConnection = {
  __typename?: 'SalesOrderDetailConnection';
  edges: Array<SalesOrderDetailEdge>;
  nodes: Array<SalesOrderDetail>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type SalesOrderDetailEdge = {
  __typename?: 'SalesOrderDetailEdge';
  cursor: Scalars['String']['output'];
  node: SalesOrderDetail;
};

export type SalesOrderDetailFilterInput = {
  and?: InputMaybe<Array<SalesOrderDetailFilterInput>>;
  created_date?: InputMaybe<TextFilterInput>;
  or?: InputMaybe<Array<SalesOrderDetailFilterInput>>;
  order_qty?: InputMaybe<IntegerFilterInput>;
  product_id?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_order_detail_id?: InputMaybe<IntegerFilterInput>;
  sales_order_id?: InputMaybe<IntegerFilterInput>;
  unit_price?: InputMaybe<FloatFilterInput>;
  unit_price_discount?: InputMaybe<FloatFilterInput>;
};

export type SalesOrderDetailInsertInput = {
  created_date: Scalars['String']['input'];
  order_qty: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
  sales_order_detail_id: Scalars['Int']['input'];
  sales_order_id: Scalars['Int']['input'];
  unit_price: Scalars['Float']['input'];
  unit_price_discount: Scalars['Float']['input'];
};

export type SalesOrderDetailOrderInput = {
  created_date?: InputMaybe<OrderByEnum>;
  order_qty?: InputMaybe<OrderByEnum>;
  product_id?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_order_detail_id?: InputMaybe<OrderByEnum>;
  sales_order_id?: InputMaybe<OrderByEnum>;
  unit_price?: InputMaybe<OrderByEnum>;
  unit_price_discount?: InputMaybe<OrderByEnum>;
};

export type SalesOrderDetailUpdateInput = {
  created_date?: InputMaybe<Scalars['String']['input']>;
  order_qty?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_order_detail_id?: InputMaybe<Scalars['Int']['input']>;
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  unit_price?: InputMaybe<Scalars['Float']['input']>;
  unit_price_discount?: InputMaybe<Scalars['Float']['input']>;
};

export type SalesOrderHeader = {
  __typename?: 'SalesOrderHeader';
  account_number?: Maybe<Scalars['String']['output']>;
  address1?: Maybe<Address>;
  address2?: Maybe<Address>;
  bill_to_address_id?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  credit_card_approval_code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customer_id: Scalars['Int']['output'];
  due_date: Scalars['String']['output'];
  freight: Scalars['Float']['output'];
  online_order_flag: Scalars['Boolean']['output'];
  order_date: Scalars['String']['output'];
  product: ProductConnection;
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  revision_number: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_detail: SalesOrderDetailConnection;
  sales_order_id: Scalars['Int']['output'];
  ship_date?: Maybe<Scalars['String']['output']>;
  ship_method: Scalars['String']['output'];
  ship_to_address_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  sub_total: Scalars['Float']['output'];
  tax_amt: Scalars['Float']['output'];
};


export type SalesOrderHeaderProductArgs = {
  filters?: InputMaybe<ProductFilterInput>;
  order_by?: InputMaybe<ProductOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type SalesOrderHeaderSales_Order_DetailArgs = {
  filters?: InputMaybe<SalesOrderDetailFilterInput>;
  order_by?: InputMaybe<SalesOrderDetailOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type SalesOrderHeaderBasic = {
  __typename?: 'SalesOrderHeaderBasic';
  account_number?: Maybe<Scalars['String']['output']>;
  bill_to_address_id?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['String']['output'];
  credit_card_approval_code?: Maybe<Scalars['String']['output']>;
  customer_id: Scalars['Int']['output'];
  due_date: Scalars['String']['output'];
  freight: Scalars['Float']['output'];
  online_order_flag: Scalars['Boolean']['output'];
  order_date: Scalars['String']['output'];
  purchase_order_number?: Maybe<Scalars['String']['output']>;
  revision_number: Scalars['Int']['output'];
  rowguid: Scalars['String']['output'];
  sales_order_id: Scalars['Int']['output'];
  ship_date?: Maybe<Scalars['String']['output']>;
  ship_method: Scalars['String']['output'];
  ship_to_address_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  sub_total: Scalars['Float']['output'];
  tax_amt: Scalars['Float']['output'];
};

export type SalesOrderHeaderConnection = {
  __typename?: 'SalesOrderHeaderConnection';
  edges: Array<SalesOrderHeaderEdge>;
  nodes: Array<SalesOrderHeader>;
  page_info: PageInfo;
  pagination_info?: Maybe<PaginationInfo>;
};

export type SalesOrderHeaderEdge = {
  __typename?: 'SalesOrderHeaderEdge';
  cursor: Scalars['String']['output'];
  node: SalesOrderHeader;
};

export type SalesOrderHeaderFilterInput = {
  account_number?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<SalesOrderHeaderFilterInput>>;
  bill_to_address_id?: InputMaybe<IntegerFilterInput>;
  comment?: InputMaybe<StringFilterInput>;
  created_date?: InputMaybe<TextFilterInput>;
  credit_card_approval_code?: InputMaybe<StringFilterInput>;
  customer_id?: InputMaybe<IntegerFilterInput>;
  due_date?: InputMaybe<TextFilterInput>;
  freight?: InputMaybe<FloatFilterInput>;
  online_order_flag?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<SalesOrderHeaderFilterInput>>;
  order_date?: InputMaybe<TextFilterInput>;
  purchase_order_number?: InputMaybe<StringFilterInput>;
  revision_number?: InputMaybe<IntegerFilterInput>;
  rowguid?: InputMaybe<TextFilterInput>;
  sales_order_id?: InputMaybe<IntegerFilterInput>;
  ship_date?: InputMaybe<TextFilterInput>;
  ship_method?: InputMaybe<StringFilterInput>;
  ship_to_address_id?: InputMaybe<IntegerFilterInput>;
  status?: InputMaybe<IntegerFilterInput>;
  sub_total?: InputMaybe<FloatFilterInput>;
  tax_amt?: InputMaybe<FloatFilterInput>;
};

export type SalesOrderHeaderInsertInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bill_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_date: Scalars['String']['input'];
  credit_card_approval_code?: InputMaybe<Scalars['String']['input']>;
  customer_id: Scalars['Int']['input'];
  due_date: Scalars['String']['input'];
  freight: Scalars['Float']['input'];
  online_order_flag: Scalars['Boolean']['input'];
  order_date: Scalars['String']['input'];
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
  revision_number: Scalars['Int']['input'];
  rowguid: Scalars['String']['input'];
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  ship_method: Scalars['String']['input'];
  ship_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
  sub_total: Scalars['Float']['input'];
  tax_amt: Scalars['Float']['input'];
};

export type SalesOrderHeaderOrderInput = {
  account_number?: InputMaybe<OrderByEnum>;
  bill_to_address_id?: InputMaybe<OrderByEnum>;
  comment?: InputMaybe<OrderByEnum>;
  created_date?: InputMaybe<OrderByEnum>;
  credit_card_approval_code?: InputMaybe<OrderByEnum>;
  customer_id?: InputMaybe<OrderByEnum>;
  due_date?: InputMaybe<OrderByEnum>;
  freight?: InputMaybe<OrderByEnum>;
  online_order_flag?: InputMaybe<OrderByEnum>;
  order_date?: InputMaybe<OrderByEnum>;
  purchase_order_number?: InputMaybe<OrderByEnum>;
  revision_number?: InputMaybe<OrderByEnum>;
  rowguid?: InputMaybe<OrderByEnum>;
  sales_order_id?: InputMaybe<OrderByEnum>;
  ship_date?: InputMaybe<OrderByEnum>;
  ship_method?: InputMaybe<OrderByEnum>;
  ship_to_address_id?: InputMaybe<OrderByEnum>;
  status?: InputMaybe<OrderByEnum>;
  sub_total?: InputMaybe<OrderByEnum>;
  tax_amt?: InputMaybe<OrderByEnum>;
};

export type SalesOrderHeaderUpdateInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  bill_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['String']['input']>;
  credit_card_approval_code?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  due_date?: InputMaybe<Scalars['String']['input']>;
  freight?: InputMaybe<Scalars['Float']['input']>;
  online_order_flag?: InputMaybe<Scalars['Boolean']['input']>;
  order_date?: InputMaybe<Scalars['String']['input']>;
  purchase_order_number?: InputMaybe<Scalars['String']['input']>;
  revision_number?: InputMaybe<Scalars['Int']['input']>;
  rowguid?: InputMaybe<Scalars['String']['input']>;
  sales_order_id?: InputMaybe<Scalars['Int']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  ship_method?: InputMaybe<Scalars['String']['input']>;
  ship_to_address_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  sub_total?: InputMaybe<Scalars['Float']['input']>;
  tax_amt?: InputMaybe<Scalars['Float']['input']>;
};

export type StringFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
  not_like?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TextFilterInput = {
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  is_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_not_null?: InputMaybe<Scalars['String']['input']>;
  is_null?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not_between?: InputMaybe<Array<Scalars['String']['input']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AddressBasic: ResolverTypeWrapper<AddressBasic>;
  AddressConnection: ResolverTypeWrapper<AddressConnection>;
  AddressEdge: ResolverTypeWrapper<AddressEdge>;
  AddressFilterInput: AddressFilterInput;
  AddressInsertInput: AddressInsertInput;
  AddressOrderInput: AddressOrderInput;
  AddressUpdateInput: AddressUpdateInput;
  BooleanFilterInput: BooleanFilterInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CursorInput: CursorInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAddress: ResolverTypeWrapper<CustomerAddress>;
  CustomerAddressBasic: ResolverTypeWrapper<CustomerAddressBasic>;
  CustomerAddressConnection: ResolverTypeWrapper<CustomerAddressConnection>;
  CustomerAddressEdge: ResolverTypeWrapper<CustomerAddressEdge>;
  CustomerAddressFilterInput: CustomerAddressFilterInput;
  CustomerAddressInsertInput: CustomerAddressInsertInput;
  CustomerAddressOrderInput: CustomerAddressOrderInput;
  CustomerAddressUpdateInput: CustomerAddressUpdateInput;
  CustomerBasic: ResolverTypeWrapper<CustomerBasic>;
  CustomerConnection: ResolverTypeWrapper<CustomerConnection>;
  CustomerEdge: ResolverTypeWrapper<CustomerEdge>;
  CustomerFilterInput: CustomerFilterInput;
  CustomerInsertInput: CustomerInsertInput;
  CustomerOrderInput: CustomerOrderInput;
  CustomerUpdateInput: CustomerUpdateInput;
  FloatFilterInput: FloatFilterInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IntegerFilterInput: IntegerFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  OffsetInput: OffsetInput;
  OrderByEnum: OrderByEnum;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageInput: PageInput;
  PaginationInfo: ResolverTypeWrapper<PaginationInfo>;
  PaginationInput: PaginationInput;
  Product: ResolverTypeWrapper<Product>;
  ProductBasic: ResolverTypeWrapper<ProductBasic>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductCategoryBasic: ResolverTypeWrapper<ProductCategoryBasic>;
  ProductCategoryConnection: ResolverTypeWrapper<ProductCategoryConnection>;
  ProductCategoryEdge: ResolverTypeWrapper<ProductCategoryEdge>;
  ProductCategoryFilterInput: ProductCategoryFilterInput;
  ProductCategoryInsertInput: ProductCategoryInsertInput;
  ProductCategoryOrderInput: ProductCategoryOrderInput;
  ProductCategoryUpdateInput: ProductCategoryUpdateInput;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductDescription: ResolverTypeWrapper<ProductDescription>;
  ProductDescriptionBasic: ResolverTypeWrapper<ProductDescriptionBasic>;
  ProductDescriptionConnection: ResolverTypeWrapper<ProductDescriptionConnection>;
  ProductDescriptionEdge: ResolverTypeWrapper<ProductDescriptionEdge>;
  ProductDescriptionFilterInput: ProductDescriptionFilterInput;
  ProductDescriptionInsertInput: ProductDescriptionInsertInput;
  ProductDescriptionOrderInput: ProductDescriptionOrderInput;
  ProductDescriptionUpdateInput: ProductDescriptionUpdateInput;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductFilterInput: ProductFilterInput;
  ProductInsertInput: ProductInsertInput;
  ProductModel: ResolverTypeWrapper<ProductModel>;
  ProductModelBasic: ResolverTypeWrapper<ProductModelBasic>;
  ProductModelConnection: ResolverTypeWrapper<ProductModelConnection>;
  ProductModelEdge: ResolverTypeWrapper<ProductModelEdge>;
  ProductModelFilterInput: ProductModelFilterInput;
  ProductModelInsertInput: ProductModelInsertInput;
  ProductModelOrderInput: ProductModelOrderInput;
  ProductModelProductDescription: ResolverTypeWrapper<ProductModelProductDescription>;
  ProductModelProductDescriptionBasic: ResolverTypeWrapper<ProductModelProductDescriptionBasic>;
  ProductModelProductDescriptionConnection: ResolverTypeWrapper<ProductModelProductDescriptionConnection>;
  ProductModelProductDescriptionEdge: ResolverTypeWrapper<ProductModelProductDescriptionEdge>;
  ProductModelProductDescriptionFilterInput: ProductModelProductDescriptionFilterInput;
  ProductModelProductDescriptionInsertInput: ProductModelProductDescriptionInsertInput;
  ProductModelProductDescriptionOrderInput: ProductModelProductDescriptionOrderInput;
  ProductModelProductDescriptionUpdateInput: ProductModelProductDescriptionUpdateInput;
  ProductModelUpdateInput: ProductModelUpdateInput;
  ProductOrderInput: ProductOrderInput;
  ProductUpdateInput: ProductUpdateInput;
  Query: ResolverTypeWrapper<{}>;
  SalesOrderDetail: ResolverTypeWrapper<SalesOrderDetail>;
  SalesOrderDetailBasic: ResolverTypeWrapper<SalesOrderDetailBasic>;
  SalesOrderDetailConnection: ResolverTypeWrapper<SalesOrderDetailConnection>;
  SalesOrderDetailEdge: ResolverTypeWrapper<SalesOrderDetailEdge>;
  SalesOrderDetailFilterInput: SalesOrderDetailFilterInput;
  SalesOrderDetailInsertInput: SalesOrderDetailInsertInput;
  SalesOrderDetailOrderInput: SalesOrderDetailOrderInput;
  SalesOrderDetailUpdateInput: SalesOrderDetailUpdateInput;
  SalesOrderHeader: ResolverTypeWrapper<SalesOrderHeader>;
  SalesOrderHeaderBasic: ResolverTypeWrapper<SalesOrderHeaderBasic>;
  SalesOrderHeaderConnection: ResolverTypeWrapper<SalesOrderHeaderConnection>;
  SalesOrderHeaderEdge: ResolverTypeWrapper<SalesOrderHeaderEdge>;
  SalesOrderHeaderFilterInput: SalesOrderHeaderFilterInput;
  SalesOrderHeaderInsertInput: SalesOrderHeaderInsertInput;
  SalesOrderHeaderOrderInput: SalesOrderHeaderOrderInput;
  SalesOrderHeaderUpdateInput: SalesOrderHeaderUpdateInput;
  StringFilterInput: StringFilterInput;
  TextFilterInput: TextFilterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Int: Scalars['Int']['output'];
  String: Scalars['String']['output'];
  AddressBasic: AddressBasic;
  AddressConnection: AddressConnection;
  AddressEdge: AddressEdge;
  AddressFilterInput: AddressFilterInput;
  AddressInsertInput: AddressInsertInput;
  AddressOrderInput: AddressOrderInput;
  AddressUpdateInput: AddressUpdateInput;
  BooleanFilterInput: BooleanFilterInput;
  Boolean: Scalars['Boolean']['output'];
  CursorInput: CursorInput;
  Customer: Customer;
  CustomerAddress: CustomerAddress;
  CustomerAddressBasic: CustomerAddressBasic;
  CustomerAddressConnection: CustomerAddressConnection;
  CustomerAddressEdge: CustomerAddressEdge;
  CustomerAddressFilterInput: CustomerAddressFilterInput;
  CustomerAddressInsertInput: CustomerAddressInsertInput;
  CustomerAddressOrderInput: CustomerAddressOrderInput;
  CustomerAddressUpdateInput: CustomerAddressUpdateInput;
  CustomerBasic: CustomerBasic;
  CustomerConnection: CustomerConnection;
  CustomerEdge: CustomerEdge;
  CustomerFilterInput: CustomerFilterInput;
  CustomerInsertInput: CustomerInsertInput;
  CustomerOrderInput: CustomerOrderInput;
  CustomerUpdateInput: CustomerUpdateInput;
  FloatFilterInput: FloatFilterInput;
  Float: Scalars['Float']['output'];
  IntegerFilterInput: IntegerFilterInput;
  Mutation: {};
  OffsetInput: OffsetInput;
  PageInfo: PageInfo;
  PageInput: PageInput;
  PaginationInfo: PaginationInfo;
  PaginationInput: PaginationInput;
  Product: Product;
  ProductBasic: ProductBasic;
  ProductCategory: ProductCategory;
  ProductCategoryBasic: ProductCategoryBasic;
  ProductCategoryConnection: ProductCategoryConnection;
  ProductCategoryEdge: ProductCategoryEdge;
  ProductCategoryFilterInput: ProductCategoryFilterInput;
  ProductCategoryInsertInput: ProductCategoryInsertInput;
  ProductCategoryOrderInput: ProductCategoryOrderInput;
  ProductCategoryUpdateInput: ProductCategoryUpdateInput;
  ProductConnection: ProductConnection;
  ProductDescription: ProductDescription;
  ProductDescriptionBasic: ProductDescriptionBasic;
  ProductDescriptionConnection: ProductDescriptionConnection;
  ProductDescriptionEdge: ProductDescriptionEdge;
  ProductDescriptionFilterInput: ProductDescriptionFilterInput;
  ProductDescriptionInsertInput: ProductDescriptionInsertInput;
  ProductDescriptionOrderInput: ProductDescriptionOrderInput;
  ProductDescriptionUpdateInput: ProductDescriptionUpdateInput;
  ProductEdge: ProductEdge;
  ProductFilterInput: ProductFilterInput;
  ProductInsertInput: ProductInsertInput;
  ProductModel: ProductModel;
  ProductModelBasic: ProductModelBasic;
  ProductModelConnection: ProductModelConnection;
  ProductModelEdge: ProductModelEdge;
  ProductModelFilterInput: ProductModelFilterInput;
  ProductModelInsertInput: ProductModelInsertInput;
  ProductModelOrderInput: ProductModelOrderInput;
  ProductModelProductDescription: ProductModelProductDescription;
  ProductModelProductDescriptionBasic: ProductModelProductDescriptionBasic;
  ProductModelProductDescriptionConnection: ProductModelProductDescriptionConnection;
  ProductModelProductDescriptionEdge: ProductModelProductDescriptionEdge;
  ProductModelProductDescriptionFilterInput: ProductModelProductDescriptionFilterInput;
  ProductModelProductDescriptionInsertInput: ProductModelProductDescriptionInsertInput;
  ProductModelProductDescriptionOrderInput: ProductModelProductDescriptionOrderInput;
  ProductModelProductDescriptionUpdateInput: ProductModelProductDescriptionUpdateInput;
  ProductModelUpdateInput: ProductModelUpdateInput;
  ProductOrderInput: ProductOrderInput;
  ProductUpdateInput: ProductUpdateInput;
  Query: {};
  SalesOrderDetail: SalesOrderDetail;
  SalesOrderDetailBasic: SalesOrderDetailBasic;
  SalesOrderDetailConnection: SalesOrderDetailConnection;
  SalesOrderDetailEdge: SalesOrderDetailEdge;
  SalesOrderDetailFilterInput: SalesOrderDetailFilterInput;
  SalesOrderDetailInsertInput: SalesOrderDetailInsertInput;
  SalesOrderDetailOrderInput: SalesOrderDetailOrderInput;
  SalesOrderDetailUpdateInput: SalesOrderDetailUpdateInput;
  SalesOrderHeader: SalesOrderHeader;
  SalesOrderHeaderBasic: SalesOrderHeaderBasic;
  SalesOrderHeaderConnection: SalesOrderHeaderConnection;
  SalesOrderHeaderEdge: SalesOrderHeaderEdge;
  SalesOrderHeaderFilterInput: SalesOrderHeaderFilterInput;
  SalesOrderHeaderInsertInput: SalesOrderHeaderInsertInput;
  SalesOrderHeaderOrderInput: SalesOrderHeaderOrderInput;
  SalesOrderHeaderUpdateInput: SalesOrderHeaderUpdateInput;
  StringFilterInput: StringFilterInput;
  TextFilterInput: TextFilterInput;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  address_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address_line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address_line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country_region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['CustomerConnection'], ParentType, ContextType, Partial<AddressCustomerArgs>>;
  customer_address?: Resolver<ResolversTypes['CustomerAddressConnection'], ParentType, ContextType, Partial<AddressCustomer_AddressArgs>>;
  postal_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state_province?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressBasic'] = ResolversParentTypes['AddressBasic']> = {
  address_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address_line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address_line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country_region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postal_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state_province?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressConnection'] = ResolversParentTypes['AddressConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AddressEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressEdge'] = ResolversParentTypes['AddressEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  address?: Resolver<ResolversTypes['AddressConnection'], ParentType, ContextType, Partial<CustomerAddressArgs>>;
  company_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_address?: Resolver<ResolversTypes['CustomerAddressConnection'], ParentType, ContextType, Partial<CustomerCustomer_AddressArgs>>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_style?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  password_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password_salt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_header?: Resolver<ResolversTypes['SalesOrderHeaderConnection'], ParentType, ContextType, Partial<CustomerSales_Order_HeaderArgs>>;
  sales_person?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddress'] = ResolversParentTypes['CustomerAddress']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  address_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressBasic'] = ResolversParentTypes['CustomerAddressBasic']> = {
  address_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressConnection'] = ResolversParentTypes['CustomerAddressConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CustomerAddressEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CustomerAddress']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressEdge'] = ResolversParentTypes['CustomerAddressEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CustomerAddress'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerBasic'] = ResolversParentTypes['CustomerBasic']> = {
  company_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middle_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_style?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  password_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password_salt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_person?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerConnection'] = ResolversParentTypes['CustomerConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CustomerEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerEdge'] = ResolversParentTypes['CustomerEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _ping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_create_batch?: Resolver<Array<ResolversTypes['AddressBasic']>, ParentType, ContextType, RequireFields<MutationAddress_Create_BatchArgs, 'data'>>;
  address_create_one?: Resolver<ResolversTypes['AddressBasic'], ParentType, ContextType, RequireFields<MutationAddress_Create_OneArgs, 'data'>>;
  address_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationAddress_DeleteArgs>>;
  address_update?: Resolver<Array<ResolversTypes['AddressBasic']>, ParentType, ContextType, RequireFields<MutationAddress_UpdateArgs, 'data'>>;
  customer_address_create_batch?: Resolver<Array<ResolversTypes['CustomerAddressBasic']>, ParentType, ContextType, RequireFields<MutationCustomer_Address_Create_BatchArgs, 'data'>>;
  customer_address_create_one?: Resolver<ResolversTypes['CustomerAddressBasic'], ParentType, ContextType, RequireFields<MutationCustomer_Address_Create_OneArgs, 'data'>>;
  customer_address_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationCustomer_Address_DeleteArgs>>;
  customer_address_update?: Resolver<Array<ResolversTypes['CustomerAddressBasic']>, ParentType, ContextType, RequireFields<MutationCustomer_Address_UpdateArgs, 'data'>>;
  customer_create_batch?: Resolver<Array<ResolversTypes['CustomerBasic']>, ParentType, ContextType, RequireFields<MutationCustomer_Create_BatchArgs, 'data'>>;
  customer_create_one?: Resolver<ResolversTypes['CustomerBasic'], ParentType, ContextType, RequireFields<MutationCustomer_Create_OneArgs, 'data'>>;
  customer_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationCustomer_DeleteArgs>>;
  customer_update?: Resolver<Array<ResolversTypes['CustomerBasic']>, ParentType, ContextType, RequireFields<MutationCustomer_UpdateArgs, 'data'>>;
  product_category_create_batch?: Resolver<Array<ResolversTypes['ProductCategoryBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Category_Create_BatchArgs, 'data'>>;
  product_category_create_one?: Resolver<ResolversTypes['ProductCategoryBasic'], ParentType, ContextType, RequireFields<MutationProduct_Category_Create_OneArgs, 'data'>>;
  product_category_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationProduct_Category_DeleteArgs>>;
  product_category_update?: Resolver<Array<ResolversTypes['ProductCategoryBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Category_UpdateArgs, 'data'>>;
  product_create_batch?: Resolver<Array<ResolversTypes['ProductBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Create_BatchArgs, 'data'>>;
  product_create_one?: Resolver<ResolversTypes['ProductBasic'], ParentType, ContextType, RequireFields<MutationProduct_Create_OneArgs, 'data'>>;
  product_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationProduct_DeleteArgs>>;
  product_description_create_batch?: Resolver<Array<ResolversTypes['ProductDescriptionBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Description_Create_BatchArgs, 'data'>>;
  product_description_create_one?: Resolver<ResolversTypes['ProductDescriptionBasic'], ParentType, ContextType, RequireFields<MutationProduct_Description_Create_OneArgs, 'data'>>;
  product_description_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationProduct_Description_DeleteArgs>>;
  product_description_update?: Resolver<Array<ResolversTypes['ProductDescriptionBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Description_UpdateArgs, 'data'>>;
  product_model_create_batch?: Resolver<Array<ResolversTypes['ProductModelBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Model_Create_BatchArgs, 'data'>>;
  product_model_create_one?: Resolver<ResolversTypes['ProductModelBasic'], ParentType, ContextType, RequireFields<MutationProduct_Model_Create_OneArgs, 'data'>>;
  product_model_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationProduct_Model_DeleteArgs>>;
  product_model_product_description_create_batch?: Resolver<Array<ResolversTypes['ProductModelProductDescriptionBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Model_Product_Description_Create_BatchArgs, 'data'>>;
  product_model_product_description_create_one?: Resolver<ResolversTypes['ProductModelProductDescriptionBasic'], ParentType, ContextType, RequireFields<MutationProduct_Model_Product_Description_Create_OneArgs, 'data'>>;
  product_model_product_description_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationProduct_Model_Product_Description_DeleteArgs>>;
  product_model_product_description_update?: Resolver<Array<ResolversTypes['ProductModelProductDescriptionBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Model_Product_Description_UpdateArgs, 'data'>>;
  product_model_update?: Resolver<Array<ResolversTypes['ProductModelBasic']>, ParentType, ContextType, RequireFields<MutationProduct_Model_UpdateArgs, 'data'>>;
  product_update?: Resolver<Array<ResolversTypes['ProductBasic']>, ParentType, ContextType, RequireFields<MutationProduct_UpdateArgs, 'data'>>;
  sales_order_detail_create_batch?: Resolver<Array<ResolversTypes['SalesOrderDetailBasic']>, ParentType, ContextType, RequireFields<MutationSales_Order_Detail_Create_BatchArgs, 'data'>>;
  sales_order_detail_create_one?: Resolver<ResolversTypes['SalesOrderDetailBasic'], ParentType, ContextType, RequireFields<MutationSales_Order_Detail_Create_OneArgs, 'data'>>;
  sales_order_detail_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationSales_Order_Detail_DeleteArgs>>;
  sales_order_detail_update?: Resolver<Array<ResolversTypes['SalesOrderDetailBasic']>, ParentType, ContextType, RequireFields<MutationSales_Order_Detail_UpdateArgs, 'data'>>;
  sales_order_header_create_batch?: Resolver<Array<ResolversTypes['SalesOrderHeaderBasic']>, ParentType, ContextType, RequireFields<MutationSales_Order_Header_Create_BatchArgs, 'data'>>;
  sales_order_header_create_one?: Resolver<ResolversTypes['SalesOrderHeaderBasic'], ParentType, ContextType, RequireFields<MutationSales_Order_Header_Create_OneArgs, 'data'>>;
  sales_order_header_delete?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationSales_Order_Header_DeleteArgs>>;
  sales_order_header_update?: Resolver<Array<ResolversTypes['SalesOrderHeaderBasic']>, ParentType, ContextType, RequireFields<MutationSales_Order_Header_UpdateArgs, 'data'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  end_cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  has_next_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  has_previous_page?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  start_cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationInfo'] = ResolversParentTypes['PaginationInfo']> = {
  current?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discontinued_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_category?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  product_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model?: Resolver<Maybe<ResolversTypes['ProductModel']>, ParentType, ContextType>;
  product_model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_detail?: Resolver<ResolversTypes['SalesOrderDetailConnection'], ParentType, ContextType, Partial<ProductSales_Order_DetailArgs>>;
  sales_order_header?: Resolver<ResolversTypes['SalesOrderHeaderConnection'], ParentType, ContextType, Partial<ProductSales_Order_HeaderArgs>>;
  sell_end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sell_start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard_cost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  thumb_nail_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail_photo_file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBasic'] = ResolversParentTypes['ProductBasic']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discontinued_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sell_end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sell_start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standard_cost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  thumb_nail_photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail_photo_file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent_product_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, Partial<ProductCategoryProductArgs>>;
  product_category_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  self_ref?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  self_ref_reverse?: Resolver<ResolversTypes['ProductCategoryConnection'], ParentType, ContextType, Partial<ProductCategorySelf_Ref_ReverseArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryBasic'] = ResolversParentTypes['ProductCategoryBasic']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent_product_category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product_category_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryConnection'] = ResolversParentTypes['ProductCategoryConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductCategoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryEdge'] = ResolversParentTypes['ProductCategoryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescription'] = ResolversParentTypes['ProductDescription']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_description_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model_product_description?: Resolver<ResolversTypes['ProductModelProductDescriptionConnection'], ParentType, ContextType, Partial<ProductDescriptionProduct_Model_Product_DescriptionArgs>>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptionBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescriptionBasic'] = ResolversParentTypes['ProductDescriptionBasic']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_description_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescriptionConnection'] = ResolversParentTypes['ProductDescriptionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductDescriptionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ProductDescription']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDescriptionEdge'] = ResolversParentTypes['ProductDescriptionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductDescription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModel'] = ResolversParentTypes['ProductModel']> = {
  catalog_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, Partial<ProductModelProductArgs>>;
  product_description?: Resolver<ResolversTypes['ProductDescriptionConnection'], ParentType, ContextType, Partial<ProductModelProduct_DescriptionArgs>>;
  product_model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model_product_description?: Resolver<ResolversTypes['ProductModelProductDescriptionConnection'], ParentType, ContextType, Partial<ProductModelProduct_Model_Product_DescriptionArgs>>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelBasic'] = ResolversParentTypes['ProductModelBasic']> = {
  catalog_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelConnection'] = ResolversParentTypes['ProductModelConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductModelEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ProductModel']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelEdge'] = ResolversParentTypes['ProductModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelProductDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelProductDescription'] = ResolversParentTypes['ProductModelProductDescription']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  culture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_description?: Resolver<Maybe<ResolversTypes['ProductDescription']>, ParentType, ContextType>;
  product_description_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model?: Resolver<Maybe<ResolversTypes['ProductModel']>, ParentType, ContextType>;
  product_model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelProductDescriptionBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelProductDescriptionBasic'] = ResolversParentTypes['ProductModelProductDescriptionBasic']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  culture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_description_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelProductDescriptionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelProductDescriptionConnection'] = ResolversParentTypes['ProductModelProductDescriptionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductModelProductDescriptionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ProductModelProductDescription']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductModelProductDescriptionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductModelProductDescriptionEdge'] = ResolversParentTypes['ProductModelProductDescriptionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductModelProductDescription'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _sea_orm_entity_metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Query_Sea_Orm_Entity_MetadataArgs, 'table_name'>>;
  address?: Resolver<ResolversTypes['AddressConnection'], ParentType, ContextType, Partial<QueryAddressArgs>>;
  customer?: Resolver<ResolversTypes['CustomerConnection'], ParentType, ContextType, Partial<QueryCustomerArgs>>;
  customer_address?: Resolver<ResolversTypes['CustomerAddressConnection'], ParentType, ContextType, Partial<QueryCustomer_AddressArgs>>;
  product?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, Partial<QueryProductArgs>>;
  product_category?: Resolver<ResolversTypes['ProductCategoryConnection'], ParentType, ContextType, Partial<QueryProduct_CategoryArgs>>;
  product_description?: Resolver<ResolversTypes['ProductDescriptionConnection'], ParentType, ContextType, Partial<QueryProduct_DescriptionArgs>>;
  product_model?: Resolver<ResolversTypes['ProductModelConnection'], ParentType, ContextType, Partial<QueryProduct_ModelArgs>>;
  product_model_product_description?: Resolver<ResolversTypes['ProductModelProductDescriptionConnection'], ParentType, ContextType, Partial<QueryProduct_Model_Product_DescriptionArgs>>;
  sales_order_detail?: Resolver<ResolversTypes['SalesOrderDetailConnection'], ParentType, ContextType, Partial<QuerySales_Order_DetailArgs>>;
  sales_order_header?: Resolver<ResolversTypes['SalesOrderHeaderConnection'], ParentType, ContextType, Partial<QuerySales_Order_HeaderArgs>>;
};

export type SalesOrderDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderDetail'] = ResolversParentTypes['SalesOrderDetail']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_detail_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sales_order_header?: Resolver<Maybe<ResolversTypes['SalesOrderHeader']>, ParentType, ContextType>;
  sales_order_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unit_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit_price_discount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderDetailBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderDetailBasic'] = ResolversParentTypes['SalesOrderDetailBasic']> = {
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_detail_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sales_order_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unit_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit_price_discount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderDetailConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderDetailConnection'] = ResolversParentTypes['SalesOrderDetailConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SalesOrderDetailEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SalesOrderDetail']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderDetailEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderDetailEdge'] = ResolversParentTypes['SalesOrderDetailEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SalesOrderDetail'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderHeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderHeader'] = ResolversParentTypes['SalesOrderHeader']> = {
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  bill_to_address_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credit_card_approval_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  due_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  online_order_flag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, Partial<SalesOrderHeaderProductArgs>>;
  purchase_order_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revision_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_detail?: Resolver<ResolversTypes['SalesOrderDetailConnection'], ParentType, ContextType, Partial<SalesOrderHeaderSales_Order_DetailArgs>>;
  sales_order_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ship_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ship_method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ship_to_address_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sub_total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tax_amt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderHeaderBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderHeaderBasic'] = ResolversParentTypes['SalesOrderHeaderBasic']> = {
  account_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bill_to_address_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credit_card_approval_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  due_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  online_order_flag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchase_order_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revision_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rowguid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sales_order_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ship_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ship_method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ship_to_address_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sub_total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tax_amt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderHeaderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderHeaderConnection'] = ResolversParentTypes['SalesOrderHeaderConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SalesOrderHeaderEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SalesOrderHeader']>, ParentType, ContextType>;
  page_info?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  pagination_info?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOrderHeaderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOrderHeaderEdge'] = ResolversParentTypes['SalesOrderHeaderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SalesOrderHeader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AddressBasic?: AddressBasicResolvers<ContextType>;
  AddressConnection?: AddressConnectionResolvers<ContextType>;
  AddressEdge?: AddressEdgeResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAddress?: CustomerAddressResolvers<ContextType>;
  CustomerAddressBasic?: CustomerAddressBasicResolvers<ContextType>;
  CustomerAddressConnection?: CustomerAddressConnectionResolvers<ContextType>;
  CustomerAddressEdge?: CustomerAddressEdgeResolvers<ContextType>;
  CustomerBasic?: CustomerBasicResolvers<ContextType>;
  CustomerConnection?: CustomerConnectionResolvers<ContextType>;
  CustomerEdge?: CustomerEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginationInfo?: PaginationInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductBasic?: ProductBasicResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  ProductCategoryBasic?: ProductCategoryBasicResolvers<ContextType>;
  ProductCategoryConnection?: ProductCategoryConnectionResolvers<ContextType>;
  ProductCategoryEdge?: ProductCategoryEdgeResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductDescription?: ProductDescriptionResolvers<ContextType>;
  ProductDescriptionBasic?: ProductDescriptionBasicResolvers<ContextType>;
  ProductDescriptionConnection?: ProductDescriptionConnectionResolvers<ContextType>;
  ProductDescriptionEdge?: ProductDescriptionEdgeResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductModel?: ProductModelResolvers<ContextType>;
  ProductModelBasic?: ProductModelBasicResolvers<ContextType>;
  ProductModelConnection?: ProductModelConnectionResolvers<ContextType>;
  ProductModelEdge?: ProductModelEdgeResolvers<ContextType>;
  ProductModelProductDescription?: ProductModelProductDescriptionResolvers<ContextType>;
  ProductModelProductDescriptionBasic?: ProductModelProductDescriptionBasicResolvers<ContextType>;
  ProductModelProductDescriptionConnection?: ProductModelProductDescriptionConnectionResolvers<ContextType>;
  ProductModelProductDescriptionEdge?: ProductModelProductDescriptionEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SalesOrderDetail?: SalesOrderDetailResolvers<ContextType>;
  SalesOrderDetailBasic?: SalesOrderDetailBasicResolvers<ContextType>;
  SalesOrderDetailConnection?: SalesOrderDetailConnectionResolvers<ContextType>;
  SalesOrderDetailEdge?: SalesOrderDetailEdgeResolvers<ContextType>;
  SalesOrderHeader?: SalesOrderHeaderResolvers<ContextType>;
  SalesOrderHeaderBasic?: SalesOrderHeaderBasicResolvers<ContextType>;
  SalesOrderHeaderConnection?: SalesOrderHeaderConnectionResolvers<ContextType>;
  SalesOrderHeaderEdge?: SalesOrderHeaderEdgeResolvers<ContextType>;
};


export type AddressKeySpecifier = ('address_id' | 'address_line1' | 'address_line2' | 'city' | 'country_region' | 'created_date' | 'customer' | 'customer_address' | 'postal_code' | 'rowguid' | 'state_province' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	address_line1?: FieldPolicy<any> | FieldReadFunction<any>,
	address_line2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country_region?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	postal_code?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	state_province?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressBasicKeySpecifier = ('address_id' | 'address_line1' | 'address_line2' | 'city' | 'country_region' | 'created_date' | 'postal_code' | 'rowguid' | 'state_province' | AddressBasicKeySpecifier)[];
export type AddressBasicFieldPolicy = {
	address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	address_line1?: FieldPolicy<any> | FieldReadFunction<any>,
	address_line2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country_region?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	postal_code?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	state_province?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | AddressConnectionKeySpecifier)[];
export type AddressConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressEdgeKeySpecifier = ('cursor' | 'node' | AddressEdgeKeySpecifier)[];
export type AddressEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('address' | 'company_name' | 'created_date' | 'customer_address' | 'customer_id' | 'email_address' | 'first_name' | 'last_name' | 'middle_name' | 'name_style' | 'password_hash' | 'password_salt' | 'phone' | 'rowguid' | 'sales_order_header' | 'sales_person' | 'suffix' | 'title' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email_address?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	name_style?: FieldPolicy<any> | FieldReadFunction<any>,
	password_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	password_salt?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_person?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressKeySpecifier = ('address' | 'address_id' | 'address_type' | 'created_date' | 'customer' | 'customer_id' | 'rowguid' | CustomerAddressKeySpecifier)[];
export type CustomerAddressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	address_type?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressBasicKeySpecifier = ('address_id' | 'address_type' | 'created_date' | 'customer_id' | 'rowguid' | CustomerAddressBasicKeySpecifier)[];
export type CustomerAddressBasicFieldPolicy = {
	address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	address_type?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | CustomerAddressConnectionKeySpecifier)[];
export type CustomerAddressConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressEdgeKeySpecifier = ('cursor' | 'node' | CustomerAddressEdgeKeySpecifier)[];
export type CustomerAddressEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerBasicKeySpecifier = ('company_name' | 'created_date' | 'customer_id' | 'email_address' | 'first_name' | 'last_name' | 'middle_name' | 'name_style' | 'password_hash' | 'password_salt' | 'phone' | 'rowguid' | 'sales_person' | 'suffix' | 'title' | CustomerBasicKeySpecifier)[];
export type CustomerBasicFieldPolicy = {
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email_address?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	name_style?: FieldPolicy<any> | FieldReadFunction<any>,
	password_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	password_salt?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_person?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | CustomerConnectionKeySpecifier)[];
export type CustomerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerEdgeKeySpecifier = ('cursor' | 'node' | CustomerEdgeKeySpecifier)[];
export type CustomerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_ping' | 'address_create_batch' | 'address_create_one' | 'address_delete' | 'address_update' | 'customer_address_create_batch' | 'customer_address_create_one' | 'customer_address_delete' | 'customer_address_update' | 'customer_create_batch' | 'customer_create_one' | 'customer_delete' | 'customer_update' | 'product_category_create_batch' | 'product_category_create_one' | 'product_category_delete' | 'product_category_update' | 'product_create_batch' | 'product_create_one' | 'product_delete' | 'product_description_create_batch' | 'product_description_create_one' | 'product_description_delete' | 'product_description_update' | 'product_model_create_batch' | 'product_model_create_one' | 'product_model_delete' | 'product_model_product_description_create_batch' | 'product_model_product_description_create_one' | 'product_model_product_description_delete' | 'product_model_product_description_update' | 'product_model_update' | 'product_update' | 'sales_order_detail_create_batch' | 'sales_order_detail_create_one' | 'sales_order_detail_delete' | 'sales_order_detail_update' | 'sales_order_header_create_batch' | 'sales_order_header_create_one' | 'sales_order_header_delete' | 'sales_order_header_update' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_ping?: FieldPolicy<any> | FieldReadFunction<any>,
	address_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	address_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	address_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	address_update?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address_update?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_update?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_update?: FieldPolicy<any> | FieldReadFunction<any>,
	product_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	product_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	product_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_update?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description_update?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_update?: FieldPolicy<any> | FieldReadFunction<any>,
	product_update?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_update?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header_create_batch?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header_create_one?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header_delete?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header_update?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('end_cursor' | 'has_next_page' | 'has_previous_page' | 'start_cursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	end_cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	has_next_page?: FieldPolicy<any> | FieldReadFunction<any>,
	has_previous_page?: FieldPolicy<any> | FieldReadFunction<any>,
	start_cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationInfoKeySpecifier = ('current' | 'offset' | 'pages' | 'total' | PaginationInfoKeySpecifier)[];
export type PaginationInfoFieldPolicy = {
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('color' | 'created_date' | 'discontinued_date' | 'list_price' | 'name' | 'product_category' | 'product_category_id' | 'product_id' | 'product_model' | 'product_model_id' | 'product_number' | 'rowguid' | 'sales_order_detail' | 'sales_order_header' | 'sell_end_date' | 'sell_start_date' | 'size' | 'standard_cost' | 'thumb_nail_photo' | 'thumbnail_photo_file_name' | 'weight' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	discontinued_date?: FieldPolicy<any> | FieldReadFunction<any>,
	list_price?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_number?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header?: FieldPolicy<any> | FieldReadFunction<any>,
	sell_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sell_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	standard_cost?: FieldPolicy<any> | FieldReadFunction<any>,
	thumb_nail_photo?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail_photo_file_name?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductBasicKeySpecifier = ('color' | 'created_date' | 'discontinued_date' | 'list_price' | 'name' | 'product_category_id' | 'product_id' | 'product_model_id' | 'product_number' | 'rowguid' | 'sell_end_date' | 'sell_start_date' | 'size' | 'standard_cost' | 'thumb_nail_photo' | 'thumbnail_photo_file_name' | 'weight' | ProductBasicKeySpecifier)[];
export type ProductBasicFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	discontinued_date?: FieldPolicy<any> | FieldReadFunction<any>,
	list_price?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_number?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sell_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sell_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	standard_cost?: FieldPolicy<any> | FieldReadFunction<any>,
	thumb_nail_photo?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail_photo_file_name?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategoryKeySpecifier = ('created_date' | 'name' | 'parent_product_category_id' | 'product' | 'product_category_id' | 'rowguid' | 'self_ref' | 'self_ref_reverse' | ProductCategoryKeySpecifier)[];
export type ProductCategoryFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	self_ref?: FieldPolicy<any> | FieldReadFunction<any>,
	self_ref_reverse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategoryBasicKeySpecifier = ('created_date' | 'name' | 'parent_product_category_id' | 'product_category_id' | 'rowguid' | ProductCategoryBasicKeySpecifier)[];
export type ProductCategoryBasicFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | ProductCategoryConnectionKeySpecifier)[];
export type ProductCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCategoryEdgeKeySpecifier = ('cursor' | 'node' | ProductCategoryEdgeKeySpecifier)[];
export type ProductCategoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | ProductConnectionKeySpecifier)[];
export type ProductConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDescriptionKeySpecifier = ('created_date' | 'description' | 'product_description_id' | 'product_model_product_description' | 'rowguid' | ProductDescriptionKeySpecifier)[];
export type ProductDescriptionFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDescriptionBasicKeySpecifier = ('created_date' | 'description' | 'product_description_id' | 'rowguid' | ProductDescriptionBasicKeySpecifier)[];
export type ProductDescriptionBasicFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDescriptionConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | ProductDescriptionConnectionKeySpecifier)[];
export type ProductDescriptionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDescriptionEdgeKeySpecifier = ('cursor' | 'node' | ProductDescriptionEdgeKeySpecifier)[];
export type ProductDescriptionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEdgeKeySpecifier = ('cursor' | 'node' | ProductEdgeKeySpecifier)[];
export type ProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelKeySpecifier = ('catalog_description' | 'created_date' | 'name' | 'product' | 'product_description' | 'product_model_id' | 'product_model_product_description' | 'rowguid' | ProductModelKeySpecifier)[];
export type ProductModelFieldPolicy = {
	catalog_description?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelBasicKeySpecifier = ('catalog_description' | 'created_date' | 'name' | 'product_model_id' | 'rowguid' | ProductModelBasicKeySpecifier)[];
export type ProductModelBasicFieldPolicy = {
	catalog_description?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | ProductModelConnectionKeySpecifier)[];
export type ProductModelConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelEdgeKeySpecifier = ('cursor' | 'node' | ProductModelEdgeKeySpecifier)[];
export type ProductModelEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelProductDescriptionKeySpecifier = ('created_date' | 'culture' | 'product_description' | 'product_description_id' | 'product_model' | 'product_model_id' | 'rowguid' | ProductModelProductDescriptionKeySpecifier)[];
export type ProductModelProductDescriptionFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	culture?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelProductDescriptionBasicKeySpecifier = ('created_date' | 'culture' | 'product_description_id' | 'product_model_id' | 'rowguid' | ProductModelProductDescriptionBasicKeySpecifier)[];
export type ProductModelProductDescriptionBasicFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	culture?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description_id?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelProductDescriptionConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | ProductModelProductDescriptionConnectionKeySpecifier)[];
export type ProductModelProductDescriptionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductModelProductDescriptionEdgeKeySpecifier = ('cursor' | 'node' | ProductModelProductDescriptionEdgeKeySpecifier)[];
export type ProductModelProductDescriptionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_sea_orm_entity_metadata' | 'address' | 'customer' | 'customer_address' | 'product' | 'product_category' | 'product_description' | 'product_model' | 'product_model_product_description' | 'sales_order_detail' | 'sales_order_header' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_sea_orm_entity_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_address?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_category?: FieldPolicy<any> | FieldReadFunction<any>,
	product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model?: FieldPolicy<any> | FieldReadFunction<any>,
	product_model_product_description?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderDetailKeySpecifier = ('created_date' | 'order_qty' | 'product' | 'product_id' | 'rowguid' | 'sales_order_detail_id' | 'sales_order_header' | 'sales_order_id' | 'unit_price' | 'unit_price_discount' | SalesOrderDetailKeySpecifier)[];
export type SalesOrderDetailFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	order_qty?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_header?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	unit_price?: FieldPolicy<any> | FieldReadFunction<any>,
	unit_price_discount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderDetailBasicKeySpecifier = ('created_date' | 'order_qty' | 'product_id' | 'rowguid' | 'sales_order_detail_id' | 'sales_order_id' | 'unit_price' | 'unit_price_discount' | SalesOrderDetailBasicKeySpecifier)[];
export type SalesOrderDetailBasicFieldPolicy = {
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	order_qty?: FieldPolicy<any> | FieldReadFunction<any>,
	product_id?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	unit_price?: FieldPolicy<any> | FieldReadFunction<any>,
	unit_price_discount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderDetailConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | SalesOrderDetailConnectionKeySpecifier)[];
export type SalesOrderDetailConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderDetailEdgeKeySpecifier = ('cursor' | 'node' | SalesOrderDetailEdgeKeySpecifier)[];
export type SalesOrderDetailEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderHeaderKeySpecifier = ('account_number' | 'address1' | 'address2' | 'bill_to_address_id' | 'comment' | 'created_date' | 'credit_card_approval_code' | 'customer' | 'customer_id' | 'due_date' | 'freight' | 'online_order_flag' | 'order_date' | 'product' | 'purchase_order_number' | 'revision_number' | 'rowguid' | 'sales_order_detail' | 'sales_order_id' | 'ship_date' | 'ship_method' | 'ship_to_address_id' | 'status' | 'sub_total' | 'tax_amt' | SalesOrderHeaderKeySpecifier)[];
export type SalesOrderHeaderFieldPolicy = {
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	bill_to_address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_card_approval_code?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	due_date?: FieldPolicy<any> | FieldReadFunction<any>,
	freight?: FieldPolicy<any> | FieldReadFunction<any>,
	online_order_flag?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	revision_number?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_detail?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_date?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_method?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_to_address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_total?: FieldPolicy<any> | FieldReadFunction<any>,
	tax_amt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderHeaderBasicKeySpecifier = ('account_number' | 'bill_to_address_id' | 'comment' | 'created_date' | 'credit_card_approval_code' | 'customer_id' | 'due_date' | 'freight' | 'online_order_flag' | 'order_date' | 'purchase_order_number' | 'revision_number' | 'rowguid' | 'sales_order_id' | 'ship_date' | 'ship_method' | 'ship_to_address_id' | 'status' | 'sub_total' | 'tax_amt' | SalesOrderHeaderBasicKeySpecifier)[];
export type SalesOrderHeaderBasicFieldPolicy = {
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	bill_to_address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_date?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_card_approval_code?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	due_date?: FieldPolicy<any> | FieldReadFunction<any>,
	freight?: FieldPolicy<any> | FieldReadFunction<any>,
	online_order_flag?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_order_number?: FieldPolicy<any> | FieldReadFunction<any>,
	revision_number?: FieldPolicy<any> | FieldReadFunction<any>,
	rowguid?: FieldPolicy<any> | FieldReadFunction<any>,
	sales_order_id?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_date?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_method?: FieldPolicy<any> | FieldReadFunction<any>,
	ship_to_address_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_total?: FieldPolicy<any> | FieldReadFunction<any>,
	tax_amt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderHeaderConnectionKeySpecifier = ('edges' | 'nodes' | 'page_info' | 'pagination_info' | SalesOrderHeaderConnectionKeySpecifier)[];
export type SalesOrderHeaderConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	page_info?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SalesOrderHeaderEdgeKeySpecifier = ('cursor' | 'node' | SalesOrderHeaderEdgeKeySpecifier)[];
export type SalesOrderHeaderEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressBasicKeySpecifier | (() => undefined | AddressBasicKeySpecifier),
		fields?: AddressBasicFieldPolicy,
	},
	AddressConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressConnectionKeySpecifier | (() => undefined | AddressConnectionKeySpecifier),
		fields?: AddressConnectionFieldPolicy,
	},
	AddressEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressEdgeKeySpecifier | (() => undefined | AddressEdgeKeySpecifier),
		fields?: AddressEdgeFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	CustomerAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressKeySpecifier | (() => undefined | CustomerAddressKeySpecifier),
		fields?: CustomerAddressFieldPolicy,
	},
	CustomerAddressBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressBasicKeySpecifier | (() => undefined | CustomerAddressBasicKeySpecifier),
		fields?: CustomerAddressBasicFieldPolicy,
	},
	CustomerAddressConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressConnectionKeySpecifier | (() => undefined | CustomerAddressConnectionKeySpecifier),
		fields?: CustomerAddressConnectionFieldPolicy,
	},
	CustomerAddressEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressEdgeKeySpecifier | (() => undefined | CustomerAddressEdgeKeySpecifier),
		fields?: CustomerAddressEdgeFieldPolicy,
	},
	CustomerBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerBasicKeySpecifier | (() => undefined | CustomerBasicKeySpecifier),
		fields?: CustomerBasicFieldPolicy,
	},
	CustomerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerConnectionKeySpecifier | (() => undefined | CustomerConnectionKeySpecifier),
		fields?: CustomerConnectionFieldPolicy,
	},
	CustomerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerEdgeKeySpecifier | (() => undefined | CustomerEdgeKeySpecifier),
		fields?: CustomerEdgeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PaginationInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationInfoKeySpecifier | (() => undefined | PaginationInfoKeySpecifier),
		fields?: PaginationInfoFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductBasicKeySpecifier | (() => undefined | ProductBasicKeySpecifier),
		fields?: ProductBasicFieldPolicy,
	},
	ProductCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCategoryKeySpecifier | (() => undefined | ProductCategoryKeySpecifier),
		fields?: ProductCategoryFieldPolicy,
	},
	ProductCategoryBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCategoryBasicKeySpecifier | (() => undefined | ProductCategoryBasicKeySpecifier),
		fields?: ProductCategoryBasicFieldPolicy,
	},
	ProductCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCategoryConnectionKeySpecifier | (() => undefined | ProductCategoryConnectionKeySpecifier),
		fields?: ProductCategoryConnectionFieldPolicy,
	},
	ProductCategoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCategoryEdgeKeySpecifier | (() => undefined | ProductCategoryEdgeKeySpecifier),
		fields?: ProductCategoryEdgeFieldPolicy,
	},
	ProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductConnectionKeySpecifier | (() => undefined | ProductConnectionKeySpecifier),
		fields?: ProductConnectionFieldPolicy,
	},
	ProductDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDescriptionKeySpecifier | (() => undefined | ProductDescriptionKeySpecifier),
		fields?: ProductDescriptionFieldPolicy,
	},
	ProductDescriptionBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDescriptionBasicKeySpecifier | (() => undefined | ProductDescriptionBasicKeySpecifier),
		fields?: ProductDescriptionBasicFieldPolicy,
	},
	ProductDescriptionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDescriptionConnectionKeySpecifier | (() => undefined | ProductDescriptionConnectionKeySpecifier),
		fields?: ProductDescriptionConnectionFieldPolicy,
	},
	ProductDescriptionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDescriptionEdgeKeySpecifier | (() => undefined | ProductDescriptionEdgeKeySpecifier),
		fields?: ProductDescriptionEdgeFieldPolicy,
	},
	ProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEdgeKeySpecifier | (() => undefined | ProductEdgeKeySpecifier),
		fields?: ProductEdgeFieldPolicy,
	},
	ProductModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelKeySpecifier | (() => undefined | ProductModelKeySpecifier),
		fields?: ProductModelFieldPolicy,
	},
	ProductModelBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelBasicKeySpecifier | (() => undefined | ProductModelBasicKeySpecifier),
		fields?: ProductModelBasicFieldPolicy,
	},
	ProductModelConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelConnectionKeySpecifier | (() => undefined | ProductModelConnectionKeySpecifier),
		fields?: ProductModelConnectionFieldPolicy,
	},
	ProductModelEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelEdgeKeySpecifier | (() => undefined | ProductModelEdgeKeySpecifier),
		fields?: ProductModelEdgeFieldPolicy,
	},
	ProductModelProductDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelProductDescriptionKeySpecifier | (() => undefined | ProductModelProductDescriptionKeySpecifier),
		fields?: ProductModelProductDescriptionFieldPolicy,
	},
	ProductModelProductDescriptionBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelProductDescriptionBasicKeySpecifier | (() => undefined | ProductModelProductDescriptionBasicKeySpecifier),
		fields?: ProductModelProductDescriptionBasicFieldPolicy,
	},
	ProductModelProductDescriptionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelProductDescriptionConnectionKeySpecifier | (() => undefined | ProductModelProductDescriptionConnectionKeySpecifier),
		fields?: ProductModelProductDescriptionConnectionFieldPolicy,
	},
	ProductModelProductDescriptionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductModelProductDescriptionEdgeKeySpecifier | (() => undefined | ProductModelProductDescriptionEdgeKeySpecifier),
		fields?: ProductModelProductDescriptionEdgeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	SalesOrderDetail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderDetailKeySpecifier | (() => undefined | SalesOrderDetailKeySpecifier),
		fields?: SalesOrderDetailFieldPolicy,
	},
	SalesOrderDetailBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderDetailBasicKeySpecifier | (() => undefined | SalesOrderDetailBasicKeySpecifier),
		fields?: SalesOrderDetailBasicFieldPolicy,
	},
	SalesOrderDetailConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderDetailConnectionKeySpecifier | (() => undefined | SalesOrderDetailConnectionKeySpecifier),
		fields?: SalesOrderDetailConnectionFieldPolicy,
	},
	SalesOrderDetailEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderDetailEdgeKeySpecifier | (() => undefined | SalesOrderDetailEdgeKeySpecifier),
		fields?: SalesOrderDetailEdgeFieldPolicy,
	},
	SalesOrderHeader?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderHeaderKeySpecifier | (() => undefined | SalesOrderHeaderKeySpecifier),
		fields?: SalesOrderHeaderFieldPolicy,
	},
	SalesOrderHeaderBasic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderHeaderBasicKeySpecifier | (() => undefined | SalesOrderHeaderBasicKeySpecifier),
		fields?: SalesOrderHeaderBasicFieldPolicy,
	},
	SalesOrderHeaderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderHeaderConnectionKeySpecifier | (() => undefined | SalesOrderHeaderConnectionKeySpecifier),
		fields?: SalesOrderHeaderConnectionFieldPolicy,
	},
	SalesOrderHeaderEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SalesOrderHeaderEdgeKeySpecifier | (() => undefined | SalesOrderHeaderEdgeKeySpecifier),
		fields?: SalesOrderHeaderEdgeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;