// in src/admin/index.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
/* import jsonServerProvider from "ra-data-json-server"; */
import { MyLayout } from "./MyLayout";
import { dataProvider } from "../dataProvider";
import authProvider from "../authProvider";

/* const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com"); */

const AdminApp = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
  >
    <Resource name="cars" list={ListGuesser} />
    <Resource name="parts" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default AdminApp;
