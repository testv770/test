import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AuditList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"audits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="additionalInfo" source="additionalInfo" />
        <TextField label="clientIp" source="clientIp" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="reqFullUrl" source="reqFullUrl" />
        <TextField label="reqMethod" source="reqMethod" />
        <TextField label="reqUrl" source="reqUrl" />
        <TextField label="resCode" source="resCode" />
        <TextField label="resMessage" source="resMessage" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="userId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="userName" source="userName" />
        <TextField label="userType" source="userType" />
      </Datagrid>
    </List>
  );
};
