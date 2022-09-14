import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { FileViewSettingTitle } from "../fileViewSetting/FileViewSettingTitle";

export const EnumFileViewSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="fileViewSettings"
          reference="FileViewSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileViewSettingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="generalSetting"
          label="generalSetting"
          choices={[
            { label: "muteAll", value: "muteAll" },
            { label: "allowAll", value: "allowAll" },
            { label: "config", value: "config" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
