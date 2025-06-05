import {
  TextField,
  Show,
  SimpleShowLayout,
  Datagrid,
  List,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const CasbinruleList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="ptype" />
      <TextField source="v0" label="Subject" />
      <TextField source="v1" label="Object" />
      <TextField source="v2" label="Action" />
    </Datagrid>
  </List>
);

export const CasbinruleShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="ptype" />
      <TextField source="v0" label="Subject" />
      <TextField source="v1" label="Object" />
      <TextField source="v2" label="Action" />
    </SimpleShowLayout>
  </Show>
);

const defaultValues = () => ({
  v3: "",
  v4: "",
  v5: "",
});
export const CasbinruleCreate = () => (
  <Create>
    <SimpleForm defaultValues={defaultValues()}>
      <TextInput source="ptype" />
      <TextInput source="v0" label="Subject" />
      <TextInput source="v1" label="Object" />
      <TextInput source="v2" label="Action" />
      <TextInput source="v3" />
      <TextInput source="v4" />
      <TextInput source="v5" />
    </SimpleForm>
  </Create>
);

export const CasbinruleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="ptype" />
      <TextInput source="v0" label="Subject" />
      <TextInput source="v1" label="Object" />
      <TextInput source="v2" label="Action" />
      <TextInput source="v3" />
      <TextInput source="v4" />
      <TextInput source="v5" />
    </SimpleForm>
  </Edit>
);
