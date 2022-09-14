import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type CategoryTemplateUpdateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  templateId?: TemplateWhereUniqueInput | null;
};
