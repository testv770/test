import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AuditCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="additionalInfo" source="additionalInfo" />
        <TextInput label="clientIp" source="clientIp" />
        <TextInput label="reqFullUrl" source="reqFullUrl" />
        <TextInput label="reqMethod" source="reqMethod" />
        <TextInput label="reqUrl" source="reqUrl" />
        <TextInput label="resCode" source="resCode" />
        <TextInput label="resMessage" source="resMessage" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="userId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="userName" source="userName" />
        <TextInput label="userType" source="userType" />
      </SimpleForm>
    </Create>
  );
};
