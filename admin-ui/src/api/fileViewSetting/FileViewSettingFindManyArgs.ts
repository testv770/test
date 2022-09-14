import { FileViewSettingWhereInput } from "./FileViewSettingWhereInput";
import { FileViewSettingOrderByInput } from "./FileViewSettingOrderByInput";

export type FileViewSettingFindManyArgs = {
  where?: FileViewSettingWhereInput;
  orderBy?: Array<FileViewSettingOrderByInput>;
  skip?: number;
  take?: number;
};
