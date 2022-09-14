import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EnumSuggestionDatumWhereUniqueInput } from "../enumSuggestionDatum/EnumSuggestionDatumWhereUniqueInput";

export type SuggestionDatumCreateInput = {
  categorySuggestionId?: CategoryWhereUniqueInput | null;
  duration?: Date | null;
  recipientId?: UserWhereUniqueInput | null;
  statusId?: EnumSuggestionDatumWhereUniqueInput | null;
  suggestionId?: UserWhereUniqueInput | null;
};
