import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { ENUMFILEVIEWSETTING_TITLE_FIELD } from "../enumFileViewSetting/EnumFileViewSettingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FileViewSettingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
