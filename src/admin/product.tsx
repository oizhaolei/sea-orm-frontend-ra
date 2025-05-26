import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

import {
  DateInput,
  Create,
  Edit,
  ImageField,
  ImageInput,
  NumberField,
  NumberInput,
  ReferenceField,
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

export const ProductList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="product_number" />
      <TextField source="color" />
      <NumberField source="standard_cost" />
      <NumberField source="list_price" />
      <TextField source="size" />
      <TextField source="weight" />
      <DateField source="sell_start_date" />
      <DateField source="sell_end_date" />
      <TextField source="discontinued_date" />
      <ImageField source="thumb_nail_photo" />
      <TextField source="thumbnail_photo_file_name" />
      <DateField source="created_date" />
    </Datagrid>
  </List>
);
export const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="product_number" />
      <TextField source="color" />
      <NumberField source="standard_cost" />
      <NumberField source="list_price" />
      <DateField source="size" />
      <TextField source="weight" />
      <ReferenceField
        source="product_category_id"
        reference="product_categories"
      />
      <ReferenceField source="product_model_id" reference="product_models" />
      <DateField source="sell_start_date" />
      <DateField source="sell_end_date" />
      <TextField source="discontinued_date" />
      <ImageField source="thumb_nail_photo" />
      <TextField source="thumbnail_photo_file_name" />
    </SimpleShowLayout>
  </Show>
);

const defaultValues = () => ({
  rowguid: uuidv4(),
  created_date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
});
export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="product_number" />
      <TextInput source="color" />
      <NumberInput source="standard_cost" />
      <NumberInput source="list_price" />
      <DateInput source="size" />
      <TextInput source="weight" />
      <ReferenceInput
        source="product_category_id"
        reference="product_categories"
      />
      <ReferenceInput source="product_model_id" reference="product_models" />
      <DateInput source="sell_start_date" />
      <DateInput source="sell_end_date" />
      <TextInput source="discontinued_date" />
      <ImageInput source="thumb_nail_photo" />
      <TextInput source="thumbnail_photo_file_name" />
    </SimpleForm>
  </Create>
);

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="product_number" />
      <TextInput source="color" />
      <NumberInput source="standard_cost" />
      <NumberInput source="list_price" />
      <DateInput source="size" />
      <TextInput source="weight" />
      <ReferenceInput
        source="product_category_id"
        reference="product_categories"
      />
      <ReferenceInput source="product_model_id" reference="product_models" />
      <DateInput source="sell_start_date" />
      <DateInput source="sell_end_date" />
      <TextInput source="discontinued_date" />
      <ImageInput source="thumb_nail_photo" />
      <TextInput source="thumbnail_photo_file_name" />
    </SimpleForm>
  </Edit>
);
