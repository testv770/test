import { RequestDatumWhereInput } from "./RequestDatumWhereInput";
import { RequestDatumOrderByInput } from "./RequestDatumOrderByInput";

export type RequestDatumFindManyArgs = {
  where?: RequestDatumWhereInput;
  orderBy?: Array<RequestDatumOrderByInput>;
  skip?: number;
  take?: number;
};
