import { SuggestionDatum } from "../suggestionDatum/SuggestionDatum";

export type EnumSuggestionDatum = {
  createdAt: Date;
  id: string;
  status?: "suggested" | "approved" | "canceled" | "rejected" | null;
  suggestionData?: Array<SuggestionDatum>;
  updatedAt: Date;
};
