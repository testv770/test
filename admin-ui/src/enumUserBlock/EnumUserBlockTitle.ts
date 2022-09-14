import { EnumUserBlock as TEnumUserBlock } from "../api/enumUserBlock/EnumUserBlock";

export const ENUMUSERBLOCK_TITLE_FIELD = "id";

export const EnumUserBlockTitle = (record: TEnumUserBlock): string => {
  return record.id || record.id;
};
