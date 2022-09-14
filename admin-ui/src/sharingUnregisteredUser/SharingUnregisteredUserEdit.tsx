import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const SharingUnregisteredUserEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiration" source="expiration" />
        <ReferenceInput source="user.id" reference="User" label="sharingId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
