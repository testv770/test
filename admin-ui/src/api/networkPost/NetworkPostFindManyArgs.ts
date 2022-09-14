import { NetworkPostWhereInput } from "./NetworkPostWhereInput";
import { NetworkPostOrderByInput } from "./NetworkPostOrderByInput";

export type NetworkPostFindManyArgs = {
  where?: NetworkPostWhereInput;
  orderBy?: Array<NetworkPostOrderByInput>;
  skip?: number;
  take?: number;
};
