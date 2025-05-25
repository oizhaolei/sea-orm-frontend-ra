// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import AbcIcon from "@mui/icons-material/Abc";

/* import jsonServerProvider from "ra-data-json-server"; */
import { MyLayout } from "./MyLayout";
import { dataProvider } from "../dataProvider";
import authProvider from "../authProvider";
import { Dashboard } from "../Dashboard";

const AdminApp = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
    dashboard={Dashboard}
  >
    <Resource
      name="customers"
      list={ListGuesser}
      show={ShowGuesser}
      icon={UserIcon}
    />
    <Resource
      name="addresses"
      list={ListGuesser}
      show={ShowGuesser}
      icon={PostIcon}
    />
    <Resource
      name="products"
      list={ListGuesser}
      show={ShowGuesser}
      icon={AbcIcon}
    />
  </Admin>
);

export default AdminApp;
