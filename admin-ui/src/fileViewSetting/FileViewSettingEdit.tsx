import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EnumFileViewSettingTitle } from "../enumFileViewSetting/EnumFileViewSettingTitle";
import { UserTitle } from "../user/UserTitle";

export const FileViewSettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
