import { CategoryTemplateCreateNestedManyWithoutTemplatesInput } from "./CategoryTemplateCreateNestedManyWithoutTemplatesInput";
import { GroupTemplateCreateNestedManyWithoutTemplatesInput } from "./GroupTemplateCreateNestedManyWithoutTemplatesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateCreateInput = {
  categoryTemplates?: CategoryTemplateCreateNestedManyWithoutTemplatesInput;
  groupTemplates?: GroupTemplateCreateNestedManyWithoutTemplatesInput;
  ownerId?: UserWhereUniqueInput | null;
  templateName?: string | null;
};
