import { PermissionGroup as TPermissionGroup } from "../api/permissionGroup/PermissionGroup";

export const PERMISSIONGROUP_TITLE_FIELD = "groupName";

export const PermissionGroupTitle = (record: TPermissionGroup): string => {
  return record.groupName || record.id;
};
