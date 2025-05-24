// in src/admin/index.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
/* import jsonServerProvider from "ra-data-json-server"; */
import { MyLayout } from "./MyLayout";
import { dataProvider } from "../dataProvider";
import authProvider from "../authProvider";

const AdminApp = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
  >
    <Resource name="customers" list={ListGuesser} />
    <Resource name="addresses" list={ListGuesser} />
    <Resource name="products" list={ListGuesser} />
  </Admin>
);

export default AdminApp;
