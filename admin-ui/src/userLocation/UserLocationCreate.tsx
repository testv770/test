import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const UserLocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="isPublicLocation" source="isPublicLocation" />
      </SimpleForm>
    </Create>
  );
};
