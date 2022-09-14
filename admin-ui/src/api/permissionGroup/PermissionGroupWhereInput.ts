import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { FileDatumListRelationFilter } from "../fileDatum/FileDatumListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionGroupNameListRelationFilter } from "../permissionGroupName/PermissionGroupNameListRelationFilter";

export type PermissionGroupWhereInput = {
  contacts?: ContactListRelationFilter;
  fileData?: FileDatumListRelationFilter;
  files?: BooleanNullableFilter;
  gallery?: BooleanNullableFilter;
  groupName?: StringNullableFilter;
  id?: StringFilter;
  location?: BooleanNullableFilter;
  permissionGroupNames?: PermissionGroupNameListRelationFilter;
  status?: BooleanNullableFilter;
};
