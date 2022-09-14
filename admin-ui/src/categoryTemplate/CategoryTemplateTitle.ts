import { CategoryTemplate as TCategoryTemplate } from "../api/categoryTemplate/CategoryTemplate";

export const CATEGORYTEMPLATE_TITLE_FIELD = "id";

export const CategoryTemplateTitle = (record: TCategoryTemplate): string => {
  return record.id || record.id;
};
