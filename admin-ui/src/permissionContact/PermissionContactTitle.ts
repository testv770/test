import { PermissionContact as TPermissionContact } from "../api/permissionContact/PermissionContact";

export const PERMISSIONCONTACT_TITLE_FIELD = "id";

export const PermissionContactTitle = (record: TPermissionContact): string => {
  return record.id || record.id;
};
