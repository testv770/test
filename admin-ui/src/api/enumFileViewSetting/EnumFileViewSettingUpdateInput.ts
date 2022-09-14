import { FileViewSettingUpdateManyWithoutEnumFileViewSettingsInput } from "./FileViewSettingUpdateManyWithoutEnumFileViewSettingsInput";

export type EnumFileViewSettingUpdateInput = {
  fileViewSettings?: FileViewSettingUpdateManyWithoutEnumFileViewSettingsInput;
  generalSetting?: "muteAll" | "allowAll" | "config" | null;
};
