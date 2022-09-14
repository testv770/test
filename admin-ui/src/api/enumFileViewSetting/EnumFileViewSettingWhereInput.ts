import { FileViewSettingListRelationFilter } from "../fileViewSetting/FileViewSettingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EnumFileViewSettingWhereInput = {
  fileViewSettings?: FileViewSettingListRelationFilter;
  generalSetting?: "muteAll" | "allowAll" | "config";
  id?: StringFilter;
};
