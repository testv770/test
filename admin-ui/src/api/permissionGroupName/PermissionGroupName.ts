import { User } from "../user/User";
import { PermissionGroup } from "../permissionGroup/PermissionGroup";

export type PermissionGroupName = {
  createdAt: Date;
  groupName: string | null;
  id: string;
  identityId?: User | null;
  permissionGroupId?: PermissionGroup | null;
  updatedAt: Date;
};
