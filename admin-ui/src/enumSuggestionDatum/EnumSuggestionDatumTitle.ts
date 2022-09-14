import { EnumSuggestionDatum as TEnumSuggestionDatum } from "../api/enumSuggestionDatum/EnumSuggestionDatum";

export const ENUMSUGGESTIONDATUM_TITLE_FIELD = "id";

export const EnumSuggestionDatumTitle = (
  record: TEnumSuggestionDatum
): string => {
  return record.id || record.id;
};
