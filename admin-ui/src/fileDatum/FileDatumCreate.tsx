import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { FileViewTitle } from "../fileView/FileViewTitle";
import { HashtagFileTitle } from "../hashtagFile/HashtagFileTitle";
import { UserTitle } from "../user/UserTitle";
import { PermissionGroupTitle } from "../permissionGroup/PermissionGroupTitle";
import { RequestDatumTitle } from "../requestDatum/RequestDatumTitle";

export const FileDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="cateogyId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <BooleanInput label="Deleted" source="deleted" />
        <TextInput label="file" source="file" />
        <TextInput label="fileType" source="fileType" />
        <ReferenceArrayInput
          source="fileViews"
          reference="FileView"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileViewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hashtagFiles"
          reference="HashtagFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HashtagFileTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isFile" source="isFile" />
        <BooleanInput label="isGallery" source="isGallery" />
        <BooleanInput label="isPublic" source="isPublic" />
        <ReferenceInput source="user.id" reference="User" label="ownerId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="permissiongroup.id"
          reference="PermissionGroup"
          label="permissionId"
        >
          <SelectInput optionText={PermissionGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="requestData"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
