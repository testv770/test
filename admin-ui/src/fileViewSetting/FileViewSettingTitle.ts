import { FileViewSetting as TFileViewSetting } from "../api/fileViewSetting/FileViewSetting";

export const FILEVIEWSETTING_TITLE_FIELD = "id";

export const FileViewSettingTitle = (record: TFileViewSetting): string => {
  return record.id || record.id;
};
