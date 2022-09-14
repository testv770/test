import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { UserTitle } from "../user/UserTitle";

export const FileViewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="filedatum.id"
          reference="FileDatum"
          label="fileId"
        >
          <SelectInput optionText={FileDatumTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="identity">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="watchId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
