import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { HashtagTitle } from "../hashtag/HashtagTitle";

export const HashtagFileCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput
          source="hashtag.id"
          reference="Hashtag"
          label="hashtagId"
        >
          <SelectInput optionText={HashtagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
