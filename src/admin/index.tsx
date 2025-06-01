// in src/admin/index.tsx
import { Admin, Resource } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import AbcIcon from "@mui/icons-material/Abc";

import { MyLayout } from "./MyLayout";
import { dataProvider } from "../dataProvider/index";
import authProvider from "../authProvider";
import { Dashboard } from "./Dashboard";
import {
  AddressCreate,
  AddressEdit,
  AddressList,
  AddressShow,
} from "./Address";
import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
} from "./Product";
import {
  CustomerCreate,
  CustomerEdit,
  CustomerList,
  CustomerShow,
} from "./Customer";

const AdminApp = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
    dashboard={Dashboard}
  >
    <Resource
      name="customers"
      list={CustomerList}
      show={CustomerShow}
      create={CustomerCreate}
      edit={CustomerEdit}
      icon={UserIcon}
    />
    <Resource
      name="addresses"
      list={AddressList}
      show={AddressShow}
      create={AddressCreate}
      edit={AddressEdit}
      icon={PostIcon}
    />
    <Resource
      name="products"
      list={ProductList}
      show={ProductShow}
      create={ProductCreate}
      edit={ProductEdit}
      icon={AbcIcon}
    />
  </Admin>
);

export default AdminApp;
