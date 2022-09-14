import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const NetworkPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="datePublished" source="datePublished" />
        <TextInput label="gif" source="gif" />
        <ReferenceInput source="user.id" reference="User" label="identityId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="image" source="image" />
        <SelectInput
          source="networkType"
          label="networkType"
          choices={[
            { label: "facebook", value: "Facebook" },
            { label: "Instagram", value: "Instagram" },
            { label: "TikTok", value: "TikTok" },
            { label: "Twitter", value: "Twitter" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="postId" source="postId" />
        <TextInput label="postText" source="postText" />
        <TextInput label="video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
