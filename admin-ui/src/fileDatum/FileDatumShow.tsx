import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FILEDATUM_TITLE_FIELD } from "./FileDatumTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LINKDATUM_TITLE_FIELD } from "../linkDatum/LinkDatumTitle";
import { ENUMREQUESTDATUM_TITLE_FIELD } from "../enumRequestDatum/EnumRequestDatumTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";

export const FileDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FileView"
          target="FileDatumId"
          label="fileViews"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="fileId"
              source="filedatum.id"
              reference="FileDatum"
            >
              <TextField source={FILEDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="identity" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="watchId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="HashtagFile"
          target="FileDatumId"
          label="hashtagFiles"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="fileId"
              source="filedatum.id"
              reference="FileDatum"
            >
              <TextField source={FILEDATUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="hashtagId"
              source="hashtag.id"
              reference="Hashtag"
            >
              <TextField source={HASHTAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RequestDatum"
          target="FileDatumId"
          label="requestData"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="askId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="categoryRequestId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <ReferenceField
              label="fileId"
              source="filedatum.id"
              reference="FileDatum"
            >
              <TextField source={FILEDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="linkId"
              source="linkdatum.id"
              reference="LinkDatum"
            >
              <TextField source={LINKDATUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="recipientId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="statusId"
              source="enumrequestdatum.id"
              reference="EnumRequestDatum"
            >
              <TextField source={ENUMREQUESTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
