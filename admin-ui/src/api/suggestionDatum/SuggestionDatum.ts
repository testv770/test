import { Category } from "../category/Category";
import { User } from "../user/User";
import { EnumSuggestionDatum } from "../enumSuggestionDatum/EnumSuggestionDatum";

export type SuggestionDatum = {
  categorySuggestionId?: Category | null;
  createdAt: Date;
  duration: Date | null;
  id: string;
  recipientId?: User | null;
  statusId?: EnumSuggestionDatum | null;
  suggestionId?: User | null;
  updatedAt: Date;
};
