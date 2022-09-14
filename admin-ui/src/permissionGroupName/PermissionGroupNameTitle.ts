import { PermissionGroupName as TPermissionGroupName } from "../api/permissionGroupName/PermissionGroupName";

export const PERMISSIONGROUPNAME_TITLE_FIELD = "groupName";

export const PermissionGroupNameTitle = (
  record: TPermissionGroupName
): string => {
  return record.groupName || record.id;
};
