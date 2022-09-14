import { EnumFileViewSettingWhereUniqueInput } from "../enumFileViewSetting/EnumFileViewSettingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewSettingCreateInput = {
  generalSettingId?: EnumFileViewSettingWhereUniqueInput | null;
  identity?: UserWhereUniqueInput | null;
};
