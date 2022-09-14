import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { PermissionGroupNameTitle } from "../permissionGroupName/PermissionGroupNameTitle";

export const PermissionGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contacts"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileData"
          reference="FileDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileDatumTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="files" source="files" />
        <BooleanInput label="gallery" source="gallery" />
        <TextInput label="groupName" source="groupName" />
        <BooleanInput label="location" source="location" />
        <ReferenceArrayInput
          source="permissionGroupNames"
          reference="PermissionGroupName"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionGroupNameTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
