import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PermissionGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"permissionGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="files" source="files" />
        <BooleanField label="gallery" source="gallery" />
        <TextField label="groupName" source="groupName" />
        <TextField label="ID" source="id" />
        <BooleanField label="location" source="location" />
        <BooleanField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
