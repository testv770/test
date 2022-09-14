import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EnumFileViewSettingTitle } from "../enumFileViewSetting/EnumFileViewSettingTitle";
import { UserTitle } from "../user/UserTitle";

export const FileViewSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="enumfileviewsetting.id"
          reference="EnumFileViewSetting"
          label="generalSettingId"
        >
          <SelectInput optionText={EnumFileViewSettingTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="identity">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
