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
import { ENUMFILEVIEWSETTING_TITLE_FIELD } from "../enumFileViewSetting/EnumFileViewSettingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FileViewSettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"fileViewSettings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="generalSettingId"
          source="enumfileviewsetting.id"
          reference="EnumFileViewSetting"
        >
          <TextField source={ENUMFILEVIEWSETTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="identity" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
