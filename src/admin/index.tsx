// in src/admin/index.tsx
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import AbcIcon from "@mui/icons-material/Abc";

import { MyLayout } from "./MyLayout";
import { dataProvider } from "../dataProvider";
import authProvider from "../authProvider";
import { Dashboard } from "../Dashboard";
import { AddressEdit, AddressList, AddressShow } from "./Address";

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
      edit={EditGuesser}
      icon={UserIcon}
    />
    <Resource
      name="addresses"
      list={AddressList}
      show={AddressShow}
      edit={AddressEdit}
      icon={PostIcon}
    />
    <Resource
      name="products"
      list={ListGuesser}
      show={ShowGuesser}
      edit={EditGuesser}
      icon={AbcIcon}
    />
  </Admin>
);

export default AdminApp;
