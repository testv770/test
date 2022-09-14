import { FileDatumWhereInput } from "./FileDatumWhereInput";
import { FileDatumOrderByInput } from "./FileDatumOrderByInput";

export type FileDatumFindManyArgs = {
  where?: FileDatumWhereInput;
  orderBy?: Array<FileDatumOrderByInput>;
  skip?: number;
  take?: number;
};
