import { GroupTemplate as TGroupTemplate } from "../api/groupTemplate/GroupTemplate";

export const GROUPTEMPLATE_TITLE_FIELD = "id";

export const GroupTemplateTitle = (record: TGroupTemplate): string => {
  return record.id || record.id;
};
