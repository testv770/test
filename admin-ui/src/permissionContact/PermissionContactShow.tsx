import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";

export const PermissionContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
