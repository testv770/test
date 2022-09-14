import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ENUMFILEVIEWSETTING_TITLE_FIELD } from "../enumFileViewSetting/EnumFileViewSettingTitle";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { LINKDATUM_TITLE_FIELD } from "../linkDatum/LinkDatumTitle";
import { ENUMREQUESTDATUM_TITLE_FIELD } from "../enumRequestDatum/EnumRequestDatumTitle";
import { ENUMSUGGESTIONDATUM_TITLE_FIELD } from "../enumSuggestionDatum/EnumSuggestionDatumTitle";
import { ENUMUSERBLOCK_TITLE_FIELD } from "../enumUserBlock/EnumUserBlockTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <ReferenceField
          label="isBlock"
          source="enumuserblock.id"
          reference="EnumUserBlock"
        >
          <TextField source={ENUMUSERBLOCK_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="isRegistered" source="isRegistered" />
        <TextField label="keyReadFirebase" source="keyReadFirebase" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Audit" target="UserId" label="audits">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contact"
          target="UserId"
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
          reference="Contact"
          target="UserId"
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
          target="UserId"
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
          reference="FileViewSetting"
          target="UserId"
          label="fileViewSettings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="generalSettingId"
              source="enumfileviewsetting.id"
              reference="EnumFileViewSetting"
            >
              <TextField source={ENUMFILEVIEWSETTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="identity" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FileView"
          target="UserId"
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
          reference="FileView"
          target="UserId"
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
          reference="GroupMember"
          target="UserId"
          label="groupMembers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="groupId" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="memberId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Group" target="UserId" label="groups">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="groupname" source="groupname" />
            <TextField label="ID" source="id" />
            <BooleanField label="isDefaultGroup" source="isDefaultGroup" />
            <ReferenceField label="ownerId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Hashtag"
          target="UserId"
          label="Hashtags"
        >
          <Datagrid rowClick="show">
            <TextField label="color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="HashtagName" source="hashtagName" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LinkDatum"
          target="UserId"
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
          reference="NetworkPost"
          target="UserId"
          label="networkPosts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="datePublished" source="datePublished" />
            <TextField label="gif" source="gif" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="image" source="image" />
            <TextField label="networkType" source="networkType" />
            <TextField label="postId" source="postId" />
            <TextField label="postText" source="postText" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="video" source="video" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PermissionGroupName"
          target="UserId"
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
        <ReferenceManyField
          reference="Profile"
          target="UserId"
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
          target="UserId"
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
          reference="RequestDatum"
          target="UserId"
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
          reference="ShareIdentity"
          target="UserId"
          label="shareIdentities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identitySharedId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SharingUnregisteredUser"
          target="UserId"
          label="sharingUnregisteredUsers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiration" source="expiration" />
            <TextField label="ID" source="id" />
            <ReferenceField label="sharingId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SuggestionDatum"
          target="UserId"
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
        <ReferenceManyField
          reference="SuggestionDatum"
          target="UserId"
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
        <ReferenceManyField
          reference="Template"
          target="UserId"
          label="templates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="ownerId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="templateName" source="templateName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserFcm"
          target="UserId"
          label="userFCMS"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FCM" source="fcm" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserLocation"
          target="UserId"
          label="userLocations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="isPublicLocation" source="isPublicLocation" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
