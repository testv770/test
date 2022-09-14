import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HashtagFileListRelationFilter } from "../hashtagFile/HashtagFileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HashtagWhereInput = {
  color?: StringNullableFilter;
  hashtagFiles?: HashtagFileListRelationFilter;
  hashtagName?: StringNullableFilter;
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
};
