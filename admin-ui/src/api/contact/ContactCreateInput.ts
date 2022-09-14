import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionContactCreateNestedManyWithoutContactsInput } from "./PermissionContactCreateNestedManyWithoutContactsInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";

export type ContactCreateInput = {
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
  permissionContacts?: PermissionContactCreateNestedManyWithoutContactsInput;
  permissionGroupId?: PermissionGroupWhereUniqueInput | null;
  phone?: string | null;
};
