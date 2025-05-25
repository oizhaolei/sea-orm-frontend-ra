import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import {
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
  Datagrid,
  List,
} from "react-admin";

export const AddressList = () => (
  <List>
    <Datagrid>
      <TextField source="address_id" />
      <TextField source="address_line1" />
      <TextField source="address_line2" />
      <TextField source="city" />
      <TextField source="state_province" />
      <TextField source="country_region" />
      <TextField source="postal_code" />
      <DateField source="created_date" />
    </Datagrid>
  </List>
);

export const AddressShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="address_id" />
      <TextField source="address_line1" />
      <TextField source="address_line2" />
      <TextField source="city" />
      <TextField source="state_province" />
      <TextField source="country_region" />
      <TextField source="postal_code" />
      <DateField source="created_date" />
    </SimpleShowLayout>
  </Show>
);
export const AddressEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="address_line1" />
      <TextInput source="address_line2" />
      <TextInput source="city" />
      <TextInput source="state_province" />
      <TextInput source="country_region" />
      <TextInput source="postal_code" />
      <DateInput source="created_date" />
    </SimpleForm>
  </Edit>
);
