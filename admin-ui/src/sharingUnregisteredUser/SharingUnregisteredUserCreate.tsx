import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const SharingUnregisteredUserCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="expiration" source="expiration" />
        <ReferenceInput source="user.id" reference="User" label="sharingId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
