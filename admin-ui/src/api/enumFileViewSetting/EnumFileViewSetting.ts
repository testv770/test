import { FileViewSetting } from "../fileViewSetting/FileViewSetting";

export type EnumFileViewSetting = {
  createdAt: Date;
  fileViewSettings?: Array<FileViewSetting>;
  generalSetting?: "muteAll" | "allowAll" | "config" | null;
  id: string;
  updatedAt: Date;
};
