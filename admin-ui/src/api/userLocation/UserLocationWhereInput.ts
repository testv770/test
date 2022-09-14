import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserLocationWhereInput = {
  id?: StringFilter;
  identityId?: UserWhereUniqueInput;
  isPublicLocation?: BooleanNullableFilter;
};
