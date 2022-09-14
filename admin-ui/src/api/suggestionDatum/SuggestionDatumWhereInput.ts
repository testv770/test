import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EnumSuggestionDatumWhereUniqueInput } from "../enumSuggestionDatum/EnumSuggestionDatumWhereUniqueInput";

export type SuggestionDatumWhereInput = {
  categorySuggestionId?: CategoryWhereUniqueInput;
  duration?: DateTimeNullableFilter;
  id?: StringFilter;
  recipientId?: UserWhereUniqueInput;
  statusId?: EnumSuggestionDatumWhereUniqueInput;
  suggestionId?: UserWhereUniqueInput;
};
