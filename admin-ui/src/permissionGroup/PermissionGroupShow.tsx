import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "./PermissionGroupTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const PermissionGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="files" source="files" />
        <BooleanField label="gallery" source="gallery" />
        <TextField label="groupName" source="groupName" />
        <TextField label="ID" source="id" />
        <BooleanField label="location" source="location" />
        <BooleanField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contact"
          target="PermissionGroupId"
          label="contacts"
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
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="FileDatum"
          target="PermissionGroupId"
          label="fileData"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="cateogyId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Deleted" source="deleted" />
            <TextField label="file" source="file" />
            <TextField label="fileType" source="fileType" />
            <TextField label="ID" source="id" />
            <BooleanField label="isFile" source="isFile" />
            <BooleanField label="isGallery" source="isGallery" />
            <BooleanField label="isPublic" source="isPublic" />
            <ReferenceField label="ownerId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="permissionId"
              source="permissiongroup.id"
              reference="PermissionGroup"
            >
              <TextField source={PERMISSIONGROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PermissionGroupName"
          target="PermissionGroupId"
          label="permissionGroupNames"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="groupName" source="groupName" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="permissionGroupId"
              source="permissiongroup.id"
              reference="PermissionGroup"
            >
              <TextField source={PERMISSIONGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
