import { User } from "../user/User";
import { PermissionContact } from "../permissionContact/PermissionContact";
import { PermissionGroup } from "../permissionGroup/PermissionGroup";

export type Contact = {
  birth: Date | null;
  company: string | null;
  contactId?: User | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  home: string | null;
  id: string;
  identityId?: User | null;
  image: string | null;
  lastName: string | null;
  mobile: string | null;
  permissionContacts?: Array<PermissionContact>;
  permissionGroupId?: PermissionGroup | null;
  phone: string | null;
  updatedAt: Date;
};
