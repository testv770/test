import { FileViewSettingCreateNestedManyWithoutEnumFileViewSettingsInput } from "./FileViewSettingCreateNestedManyWithoutEnumFileViewSettingsInput";

export type EnumFileViewSettingCreateInput = {
  fileViewSettings?: FileViewSettingCreateNestedManyWithoutEnumFileViewSettingsInput;
  generalSetting?: "muteAll" | "allowAll" | "config" | null;
};
