import { EnumFileViewSetting } from "../enumFileViewSetting/EnumFileViewSetting";
import { User } from "../user/User";

export type FileViewSetting = {
  createdAt: Date;
  generalSettingId?: EnumFileViewSetting | null;
  id: string;
  identity?: User | null;
  updatedAt: Date;
};
