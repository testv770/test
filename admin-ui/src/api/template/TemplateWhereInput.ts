import { CategoryTemplateListRelationFilter } from "../categoryTemplate/CategoryTemplateListRelationFilter";
import { GroupTemplateListRelationFilter } from "../groupTemplate/GroupTemplateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  categoryTemplates?: CategoryTemplateListRelationFilter;
  groupTemplates?: GroupTemplateListRelationFilter;
  id?: StringFilter;
  ownerId?: UserWhereUniqueInput;
  templateName?: StringNullableFilter;
};
