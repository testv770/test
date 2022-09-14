import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";

export const HashtagFileEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput
          source="hashtag.id"
          reference="Hashtag"
          label="hashtagId"
        >
          <SelectInput optionText={HashtagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
