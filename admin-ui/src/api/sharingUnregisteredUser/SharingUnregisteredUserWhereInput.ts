import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SharingUnregisteredUserWhereInput = {
  expiration?: DateTimeNullableFilter;
  id?: StringFilter;
  sharingId?: UserWhereUniqueInput;
  url?: StringNullableFilter;
};
