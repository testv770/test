import { CategoryTemplateUpdateManyWithoutTemplatesInput } from "./CategoryTemplateUpdateManyWithoutTemplatesInput";
import { GroupTemplateUpdateManyWithoutTemplatesInput } from "./GroupTemplateUpdateManyWithoutTemplatesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateUpdateInput = {
  categoryTemplates?: CategoryTemplateUpdateManyWithoutTemplatesInput;
  groupTemplates?: GroupTemplateUpdateManyWithoutTemplatesInput;
  ownerId?: UserWhereUniqueInput | null;
  templateName?: string | null;
};
