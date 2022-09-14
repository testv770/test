import { RequestDatum as TRequestDatum } from "../api/requestDatum/RequestDatum";

export const REQUESTDATUM_TITLE_FIELD = "id";

export const RequestDatumTitle = (record: TRequestDatum): string => {
  return record.id || record.id;
};
