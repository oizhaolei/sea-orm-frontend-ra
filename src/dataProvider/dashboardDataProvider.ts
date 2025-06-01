import { type DataProvider } from "react-admin";
import { AdminsApiFactory, Configuration } from "../services";

const accessToken = () => {
  return localStorage.getItem("jwt_token") || "";
};

export const dashboardDataProvider: DataProvider = {
  // @ts-ignore
  getList: async (_resource, params) => {
    const { data } = await AdminsApiFactory(
      new Configuration({
        accessToken: accessToken(),
      }),
    ).dashboard(params.filter);

    return {
      data: data.map((d) => ({ id: d.key, ...d })),
      total: data.length,
    };
  },
  // @ts-ignore
  create: () => Promise.resolve({ data: { id: 0 } }),
  // @ts-ignore
  delete: () => Promise.resolve({ data: {} }),
  deleteMany: () => Promise.resolve({}),
  getMany: () => Promise.resolve({ data: [] }),
  getManyReference: () => Promise.resolve({ data: [], total: 0 }),
  // @ts-ignore
  getOne: () => Promise.resolve({ data: {} }),
  // @ts-ignore
  update: () => Promise.resolve({ data: {} }),
  updateMany: () => Promise.resolve({}),
};
