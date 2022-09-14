import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewUpdateInput = {
  fileId?: FileDatumWhereUniqueInput | null;
  identity?: UserWhereUniqueInput | null;
  watchId?: UserWhereUniqueInput | null;
};
