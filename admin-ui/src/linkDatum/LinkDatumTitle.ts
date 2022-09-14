import { LinkDatum as TLinkDatum } from "../api/linkDatum/LinkDatum";

export const LINKDATUM_TITLE_FIELD = "title";

export const LinkDatumTitle = (record: TLinkDatum): string => {
  return record.title || record.id;
};
