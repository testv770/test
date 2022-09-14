import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { HashtagFileTitle } from "../hashtagFile/HashtagFileTitle";
import { UserTitle } from "../user/UserTitle";

export const HashtagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceArrayInput
          source="hashtagFiles"
          reference="HashtagFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HashtagFileTitle} />
        </ReferenceArrayInput>
        <TextInput label="HashtagName" source="hashtagName" />
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
