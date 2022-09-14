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
import { PermissionGroupTitle } from "../permissionGroup/PermissionGroupTitle";

export const PermissionGroupNameCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="groupName" source="groupName" />
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="permissiongroup.id"
          reference="PermissionGroup"
          label="permissionGroupId"
        >
          <SelectInput optionText={PermissionGroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
