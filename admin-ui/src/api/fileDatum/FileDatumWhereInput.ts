import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileViewListRelationFilter } from "../fileView/FileViewListRelationFilter";
import { HashtagFileListRelationFilter } from "../hashtagFile/HashtagFileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";
import { RequestDatumListRelationFilter } from "../requestDatum/RequestDatumListRelationFilter";

export type FileDatumWhereInput = {
  cateogyId?: CategoryWhereUniqueInput;
  deleted?: BooleanNullableFilter;
  file?: StringNullableFilter;
  fileType?: StringNullableFilter;
  fileViews?: FileViewListRelationFilter;
  hashtagFiles?: HashtagFileListRelationFilter;
  id?: StringFilter;
  isFile?: BooleanNullableFilter;
  isGallery?: BooleanNullableFilter;
  isPublic?: BooleanNullableFilter;
  ownerId?: UserWhereUniqueInput;
  permissionId?: PermissionGroupWhereUniqueInput;
  requestData?: RequestDatumListRelationFilter;
  title?: StringNullableFilter;
};
