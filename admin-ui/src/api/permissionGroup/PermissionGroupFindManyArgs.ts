import { PermissionGroupWhereInput } from "./PermissionGroupWhereInput";
import { PermissionGroupOrderByInput } from "./PermissionGroupOrderByInput";

export type PermissionGroupFindManyArgs = {
  where?: PermissionGroupWhereInput;
  orderBy?: Array<PermissionGroupOrderByInput>;
  skip?: number;
  take?: number;
};
