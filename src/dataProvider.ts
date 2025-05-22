// in src/dataProvider.ts
import type { DataProvider } from "react-admin";
import {
  CarsApiFactory,
  Configuration,
  PartsApiFactory,
  UsersApiFactory,
} from "./services";

const getResourceFactory = (resource: string) => {
  const configuration = new Configuration({
    accessToken: localStorage.getItem("token") || "",
  });
  if (resource === "cars") {
    return CarsApiFactory(configuration);
  } else if (resource === "parts") {
    return PartsApiFactory(configuration);
  } else if (resource === "users") {
    return UsersApiFactory(configuration);
  }
  throw new Error(`invalid resource: ${resource}`);
};
export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const name = params.filter.name;
    const ids = undefined;
    const page = params.pagination?.page;
    const perPage = params.pagination?.perPage;
    return getResourceFactory(resource)
      .list(name, ids, page, perPage)
      .then(({ data: { data, total } }) => ({
        data,
        total,
      }));
  },

  // getOne: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
  //     data: json,
  //   })),

  getMany: (resource, params) => {
    const name = undefined;
    const ids = params.ids;
    return getResourceFactory(resource)
      .list(name, ids.join())
      .then(({ data: { data } }) => ({
        data,
      }));
  },

  // getManyReference: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify({
  //       ...params.filter,
  //       [params.target]: params.id,
  //     }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   return httpClient(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(
  //       (headers.get("content-range") || "0").split("/").pop() || "0",
  //       10,
  //     ),
  //   }));
  // },

  // update: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json })),

  // updateMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },

  // create: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}`, {
  //     method: "POST",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({
  //     data: { ...params.data, id: json.id } as any,
  //   })),

  // delete: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "DELETE",
  //   }).then(({ json }) => ({ data: json })),

  // deleteMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "DELETE",
  //   }).then(({ json }) => ({ data: json }));
  // },
};
