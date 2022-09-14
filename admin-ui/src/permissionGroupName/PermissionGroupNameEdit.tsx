import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { PermissionGroupTitle } from "../permissionGroup/PermissionGroupTitle";

export const PermissionGroupNameEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
