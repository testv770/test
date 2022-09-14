import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backgroundImage" source="backgroundImage" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryView"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="content" source="content" />
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="image" source="image" />
        <TextInput label="themeColor" source="themeColor" />
        <TextInput label="title" source="title" />
        <TextInput label="TotalFileWeight" source="totalFileWeight" />
      </SimpleForm>
    </Edit>
  );
};
