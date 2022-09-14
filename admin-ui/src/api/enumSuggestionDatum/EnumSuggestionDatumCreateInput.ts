import { SuggestionDatumCreateNestedManyWithoutEnumSuggestionDataInput } from "./SuggestionDatumCreateNestedManyWithoutEnumSuggestionDataInput";

export type EnumSuggestionDatumCreateInput = {
  status?: "suggested" | "approved" | "canceled" | "rejected" | null;
  suggestionData?: SuggestionDatumCreateNestedManyWithoutEnumSuggestionDataInput;
};
