import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { HASHTAG_TITLE_FIELD } from "../hashtag/HashtagTitle";

export const HashtagFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"hashtagFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
