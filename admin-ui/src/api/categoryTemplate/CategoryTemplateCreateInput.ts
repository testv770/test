import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type CategoryTemplateCreateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  templateId?: TemplateWhereUniqueInput | null;
};
