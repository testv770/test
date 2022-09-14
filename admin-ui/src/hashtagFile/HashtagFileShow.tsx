import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const HashtagFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="fileId"
          source="filedatum.id"
          reference="FileDatum"
        >
          <TextField source={FILEDATUM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="hashtagId"
          source="hashtag.id"
          reference="Hashtag"
        >
          <TextField source={HASHTAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
