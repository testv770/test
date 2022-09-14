import { PermissionContactWhereInput } from "./PermissionContactWhereInput";
import { PermissionContactOrderByInput } from "./PermissionContactOrderByInput";

export type PermissionContactFindManyArgs = {
  where?: PermissionContactWhereInput;
  orderBy?: Array<PermissionContactOrderByInput>;
  skip?: number;
  take?: number;
};
