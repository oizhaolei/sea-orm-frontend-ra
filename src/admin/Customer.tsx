import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

import {
  BooleanInput,
  DateInput,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  BooleanField,
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
  Datagrid,
  List,
} from "react-admin";

export const CustomerList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="first_name" />
      <TextField source="middle_name" />
      <TextField source="last_name" />
      <BooleanField source="name_style" />
      <TextField source="suffix" />
      <TextField source="company_name" />
      <TextField source="sales_person" />
      <TextField source="email_address" />
      <TextField source="phone" />
      <DateField source="created_date" />
    </Datagrid>
  </List>
);

export const CustomerShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="first_name" />
      <TextField source="middle_name" />
      <TextField source="last_name" />
      <BooleanField source="name_style" />
      <TextField source="suffix" />
      <TextField source="company_name" />
      <TextField source="sales_person" />
      <TextField source="email_address" />
      <TextField source="phone" />
      <DateField source="created_date" />
    </SimpleShowLayout>
  </Show>
);

const defaultValues = () => ({
  rowguid: uuidv4(),
  created_date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
});
export const CustomerCreate = () => (
  <Create>
    <SimpleForm defaultValues={defaultValues()}>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="first_name" />
      <TextInput source="middle_name" />
      <TextInput source="last_name" />
      <BooleanInput source="name_style" />
      <TextInput source="suffix" />
      <TextInput source="company_name" />
      <TextInput source="sales_person" />
      <TextInput source="email_address" />
      <TextInput source="phone" />
      <DateInput source="created_date" />
    </SimpleForm>
  </Create>
);

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="first_name" />
      <TextInput source="middle_name" />
      <TextInput source="last_name" />
      <BooleanInput source="name_style" />
      <TextInput source="suffix" />
      <TextInput source="company_name" />
      <TextInput source="sales_person" />
      <TextInput source="email_address" />
      <TextInput source="phone" />
      <DateInput source="created_date" />
    </SimpleForm>
  </Edit>
);
