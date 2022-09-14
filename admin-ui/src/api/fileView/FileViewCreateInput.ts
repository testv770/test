import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewCreateInput = {
  fileId?: FileDatumWhereUniqueInput | null;
  identity?: UserWhereUniqueInput | null;
  watchId?: UserWhereUniqueInput | null;
};
