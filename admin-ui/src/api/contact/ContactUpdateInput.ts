import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionContactUpdateManyWithoutContactsInput } from "./PermissionContactUpdateManyWithoutContactsInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";

export type ContactUpdateInput = {
  birth?: Date | null;
  company?: string | null;
  contactId?: UserWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  home?: string | null;
  identityId?: UserWhereUniqueInput | null;
  image?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  permissionContacts?: PermissionContactUpdateManyWithoutContactsInput;
  permissionGroupId?: PermissionGroupWhereUniqueInput | null;
  phone?: string | null;
};
