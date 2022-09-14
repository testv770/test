import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LinkDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"linkData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="categoryId"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isPublic" source="isPublic" />
        <TextField label="link" source="link" />
        <ReferenceField label="ownerId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
