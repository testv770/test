import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="birth" source="birth" />
        <TextField label="company" source="company" />
        <ReferenceField label="contactId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="home" source="home" />
        <TextField label="ID" source="id" />
        <ReferenceField label="identityId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="image" source="image" />
        <TextField label="lastName" source="lastName" />
        <TextField label="mobile" source="mobile" />
        <ReferenceField
          label="permissionGroupId"
          source="permissiongroup.id"
          reference="PermissionGroup"
        >
          <TextField source={PERMISSIONGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
