import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CONTACT_TITLE_FIELD } from "./ContactTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="identityId" source="user.id" reference="User">
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
        <ReferenceManyField
          reference="PermissionContact"
          target="ContactId"
          label="permissionContacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="contactRelationId"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="files" source="files" />
            <BooleanField label="gallery" source="gallery" />
            <TextField label="ID" source="id" />
            <BooleanField label="location" source="location" />
            <BooleanField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
