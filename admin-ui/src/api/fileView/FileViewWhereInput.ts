import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileViewWhereInput = {
  fileId?: FileDatumWhereUniqueInput;
  id?: StringFilter;
  identity?: UserWhereUniqueInput;
  watchId?: UserWhereUniqueInput;
};
