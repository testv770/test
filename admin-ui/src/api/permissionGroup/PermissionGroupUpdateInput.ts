import { ContactUpdateManyWithoutPermissionGroupsInput } from "./ContactUpdateManyWithoutPermissionGroupsInput";
import { FileDatumUpdateManyWithoutPermissionGroupsInput } from "./FileDatumUpdateManyWithoutPermissionGroupsInput";
import { PermissionGroupNameUpdateManyWithoutPermissionGroupsInput } from "./PermissionGroupNameUpdateManyWithoutPermissionGroupsInput";

export type PermissionGroupUpdateInput = {
  contacts?: ContactUpdateManyWithoutPermissionGroupsInput;
  fileData?: FileDatumUpdateManyWithoutPermissionGroupsInput;
  files?: boolean | null;
  gallery?: boolean | null;
  groupName?: string | null;
  location?: boolean | null;
  permissionGroupNames?: PermissionGroupNameUpdateManyWithoutPermissionGroupsInput;
  status?: boolean | null;
};
