import { FileViewWhereInput } from "./FileViewWhereInput";
import { FileViewOrderByInput } from "./FileViewOrderByInput";

export type FileViewFindManyArgs = {
  where?: FileViewWhereInput;
  orderBy?: Array<FileViewOrderByInput>;
  skip?: number;
  take?: number;
};
