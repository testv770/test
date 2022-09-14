import { SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput } from "./SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput";

export type EnumSuggestionDatumUpdateInput = {
  status?: "suggested" | "approved" | "canceled" | "rejected" | null;
  suggestionData?: SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput;
};
