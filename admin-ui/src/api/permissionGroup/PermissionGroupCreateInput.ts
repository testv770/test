import { ContactCreateNestedManyWithoutPermissionGroupsInput } from "./ContactCreateNestedManyWithoutPermissionGroupsInput";
import { FileDatumCreateNestedManyWithoutPermissionGroupsInput } from "./FileDatumCreateNestedManyWithoutPermissionGroupsInput";
import { PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput } from "./PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput";

export type PermissionGroupCreateInput = {
  contacts?: ContactCreateNestedManyWithoutPermissionGroupsInput;
  fileData?: FileDatumCreateNestedManyWithoutPermissionGroupsInput;
  files?: boolean | null;
  gallery?: boolean | null;
  groupName?: string | null;
  location?: boolean | null;
  permissionGroupNames?: PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput;
  status?: boolean | null;
};
