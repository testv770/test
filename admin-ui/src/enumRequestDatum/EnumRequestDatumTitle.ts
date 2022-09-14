import { EnumRequestDatum as TEnumRequestDatum } from "../api/enumRequestDatum/EnumRequestDatum";

export const ENUMREQUESTDATUM_TITLE_FIELD = "id";

export const EnumRequestDatumTitle = (record: TEnumRequestDatum): string => {
  return record.id || record.id;
};
