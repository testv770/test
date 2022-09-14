import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AuditShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
