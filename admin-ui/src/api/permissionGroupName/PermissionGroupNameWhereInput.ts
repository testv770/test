import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";

export type PermissionGroupNameWhereInput = {
  groupName?: StringNullableFilter;
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
  permissionGroupId?: PermissionGroupWhereUniqueInput;
};
