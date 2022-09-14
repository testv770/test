import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { ContactTitle } from "../contact/ContactTitle";

export const PermissionContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contact.id"
          reference="Contact"
          label="contactRelationId"
        >
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <BooleanInput label="files" source="files" />
        <BooleanInput label="gallery" source="gallery" />
        <BooleanInput label="location" source="location" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
