import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { UserTitle } from "../user/UserTitle";

export const FileViewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
