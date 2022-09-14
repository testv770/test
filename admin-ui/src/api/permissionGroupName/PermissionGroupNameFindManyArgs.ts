import { PermissionGroupNameWhereInput } from "./PermissionGroupNameWhereInput";
import { PermissionGroupNameOrderByInput } from "./PermissionGroupNameOrderByInput";

export type PermissionGroupNameFindManyArgs = {
  where?: PermissionGroupNameWhereInput;
  orderBy?: Array<PermissionGroupNameOrderByInput>;
  skip?: number;
  take?: number;
};
