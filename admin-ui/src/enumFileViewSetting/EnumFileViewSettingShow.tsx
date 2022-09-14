import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ENUMFILEVIEWSETTING_TITLE_FIELD } from "./EnumFileViewSettingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EnumFileViewSettingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="generalSetting" source="generalSetting" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FileViewSetting"
          target="EnumFileViewSettingId"
          label="fileViewSettings"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
