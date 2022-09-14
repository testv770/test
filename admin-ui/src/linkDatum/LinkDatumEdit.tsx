import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";
import { RequestDatumTitle } from "../requestDatum/RequestDatumTitle";

export const LinkDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <BooleanInput label="isPublic" source="isPublic" />
        <TextInput label="link" source="link" />
        <ReferenceInput source="user.id" reference="User" label="ownerId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="requestData"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
