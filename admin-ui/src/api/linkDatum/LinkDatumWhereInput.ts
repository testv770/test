import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RequestDatumListRelationFilter } from "../requestDatum/RequestDatumListRelationFilter";

export type LinkDatumWhereInput = {
  categoryId?: CategoryWhereUniqueInput;
  id?: StringFilter;
  isPublic?: BooleanNullableFilter;
  link?: StringNullableFilter;
  ownerId?: UserWhereUniqueInput;
  requestData?: RequestDatumListRelationFilter;
  title?: StringNullableFilter;
};
