import { StringFilter } from "../../util/StringFilter";
import { SuggestionDatumListRelationFilter } from "../suggestionDatum/SuggestionDatumListRelationFilter";

export type EnumSuggestionDatumWhereInput = {
  id?: StringFilter;
  status?: "suggested" | "approved" | "canceled" | "rejected";
  suggestionData?: SuggestionDatumListRelationFilter;
};
