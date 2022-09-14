import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  backgroundImage?: StringNullableFilter;
  categoryView?: CategoryWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
  image?: StringNullableFilter;
  themeColor?: StringNullableFilter;
  title?: StringNullableFilter;
  totalFileWeight?: StringNullableFilter;
};
