import { EnumFileViewSettingWhereUniqueInput } from "../enumFileViewSetting/EnumFileViewSettingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewSettingUpdateInput = {
  generalSettingId?: EnumFileViewSettingWhereUniqueInput | null;
  identity?: UserWhereUniqueInput | null;
};
