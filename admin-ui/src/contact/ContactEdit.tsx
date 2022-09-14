import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PermissionContactTitle } from "../permissionContact/PermissionContactTitle";
import { PermissionGroupTitle } from "../permissionGroup/PermissionGroupTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="birth" source="birth" />
        <TextInput label="company" source="company" />
        <ReferenceInput source="user.id" reference="User" label="contactId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="home" source="home" />
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="image" source="image" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="mobile" source="mobile" />
        <ReferenceArrayInput
          source="permissionContacts"
          reference="PermissionContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionContactTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="permissiongroup.id"
          reference="PermissionGroup"
          label="permissionGroupId"
        >
          <SelectInput optionText={PermissionGroupTitle} />
        </ReferenceInput>
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
