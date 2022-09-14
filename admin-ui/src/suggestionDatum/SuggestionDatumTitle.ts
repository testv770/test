import { SuggestionDatum as TSuggestionDatum } from "../api/suggestionDatum/SuggestionDatum";

export const SUGGESTIONDATUM_TITLE_FIELD = "id";

export const SuggestionDatumTitle = (record: TSuggestionDatum): string => {
  return record.id || record.id;
};
