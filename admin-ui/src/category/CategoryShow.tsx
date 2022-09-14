import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { LINKDATUM_TITLE_FIELD } from "../linkDatum/LinkDatumTitle";
import { ENUMREQUESTDATUM_TITLE_FIELD } from "../enumRequestDatum/EnumRequestDatumTitle";
import { ENUMSUGGESTIONDATUM_TITLE_FIELD } from "../enumSuggestionDatum/EnumSuggestionDatumTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categoryName" source="categoryName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CategoryTemplate"
          target="CategoryId"
          label="categoryTemplates"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categoryId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="templateId"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FileDatum"
          target="CategoryId"
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
          reference="LinkDatum"
          target="CategoryId"
          label="linkData"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categoryId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isPublic" source="isPublic" />
            <TextField label="link" source="link" />
            <ReferenceField label="ownerId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Profile"
          target="CategoryId"
          label="profiles"
        >
          <Datagrid rowClick="show">
            <TextField label="backgroundImage" source="backgroundImage" />
            <ReferenceField
              label="categoryView"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="image" source="image" />
            <TextField label="themeColor" source="themeColor" />
            <TextField label="title" source="title" />
            <TextField label="TotalFileWeight" source="totalFileWeight" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RequestDatum"
          target="CategoryId"
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
        <ReferenceManyField
          reference="SuggestionDatum"
          target="CategoryId"
          label="suggestionData"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categorySuggestionId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="recipientId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="statusId"
              source="enumsuggestiondatum.id"
              reference="EnumSuggestionDatum"
            >
              <TextField source={ENUMSUGGESTIONDATUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="suggestionId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
