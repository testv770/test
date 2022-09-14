import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";

export type PermissionGroupNameCreateInput = {
  groupName?: string | null;
  identityId?: UserWhereUniqueInput | null;
  permissionGroupId?: PermissionGroupWhereUniqueInput | null;
};
