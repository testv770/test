import { EnumFileViewSettingWhereUniqueInput } from "../enumFileViewSetting/EnumFileViewSettingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewSettingWhereInput = {
  generalSettingId?: EnumFileViewSettingWhereUniqueInput;
  id?: StringFilter;
  identity?: UserWhereUniqueInput;
};
