import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { AuditTitle } from "../audit/AuditTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { FileViewSettingTitle } from "../fileViewSetting/FileViewSettingTitle";
import { FileViewTitle } from "../fileView/FileViewTitle";
import { GroupMemberTitle } from "../groupMember/GroupMemberTitle";
import { GroupTitle } from "../group/GroupTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";
import { EnumUserBlockTitle } from "../enumUserBlock/EnumUserBlockTitle";
import { LinkDatumTitle } from "../linkDatum/LinkDatumTitle";
import { NetworkPostTitle } from "../networkPost/NetworkPostTitle";
import { PermissionGroupNameTitle } from "../permissionGroupName/PermissionGroupNameTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { RequestDatumTitle } from "../requestDatum/RequestDatumTitle";
import { ShareIdentityTitle } from "../shareIdentity/ShareIdentityTitle";
import { SharingUnregisteredUserTitle } from "../sharingUnregisteredUser/SharingUnregisteredUserTitle";
import { SuggestionDatumTitle } from "../suggestionDatum/SuggestionDatumTitle";
import { TemplateTitle } from "../template/TemplateTitle";
import { UserFcmTitle } from "../userFcm/UserFcmTitle";
import { UserLocationTitle } from "../userLocation/UserLocationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="audits"
          reference="Audit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuditTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contactsContactId"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contactsIdentityId"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <TextInput label="country" source="country" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="fileData"
          reference="FileDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileViewSettings"
          reference="FileViewSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileViewSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileViews_identity"
          reference="FileView"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileViewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileViews_watchId"
          reference="FileView"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileViewTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="groupMembers"
          reference="GroupMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="groups"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hashtags"
          reference="Hashtag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HashtagTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <ReferenceInput
          source="enumuserblock.id"
          reference="EnumUserBlock"
          label="isBlock"
        >
          <SelectInput optionText={EnumUserBlockTitle} />
        </ReferenceInput>
        <BooleanInput label="isRegistered" source="isRegistered" />
        <TextInput label="keyReadFirebase" source="keyReadFirebase" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="linkData"
          reference="LinkDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="networkPosts"
          reference="NetworkPost"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NetworkPostTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="permissionGroupNames"
          reference="PermissionGroupName"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionGroupNameTitle} />
        </ReferenceArrayInput>
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="profiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestDataAdkId_adkId"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestDataRecipientId"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="shareIdentities"
          reference="ShareIdentity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShareIdentityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sharingUnregisteredUsers"
          reference="SharingUnregisteredUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SharingUnregisteredUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suggestionData_recipientId"
          reference="SuggestionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suggestionData_suggestionId"
          reference="SuggestionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="templates"
          reference="Template"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userFcms"
          reference="UserFcm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserFcmTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userLocations"
          reference="UserLocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserLocationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
