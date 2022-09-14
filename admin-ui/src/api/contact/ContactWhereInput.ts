import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PermissionContactListRelationFilter } from "../permissionContact/PermissionContactListRelationFilter";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";

export type ContactWhereInput = {
  birth?: DateTimeNullableFilter;
  company?: StringNullableFilter;
  contactId?: UserWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  home?: StringNullableFilter;
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
  image?: StringNullableFilter;
  lastName?: StringNullableFilter;
  mobile?: StringNullableFilter;
  permissionContacts?: PermissionContactListRelationFilter;
  permissionGroupId?: PermissionGroupWhereUniqueInput;
  phone?: StringNullableFilter;
};
