import { EnumFileViewSetting as TEnumFileViewSetting } from "../api/enumFileViewSetting/EnumFileViewSetting";

export const ENUMFILEVIEWSETTING_TITLE_FIELD = "id";

export const EnumFileViewSettingTitle = (
  record: TEnumFileViewSetting
): string => {
  return record.id || record.id;
};
