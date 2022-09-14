import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NetworkPostWhereInput = {
  datePublished?: DateTimeNullableFilter;
  gif?: StringNullableFilter;
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
  image?: StringNullableFilter;
  networkType?: "Facebook" | "Instagram" | "TikTok" | "Twitter";
  postId?: StringNullableFilter;
  postText?: StringNullableFilter;
  video?: StringNullableFilter;
};
