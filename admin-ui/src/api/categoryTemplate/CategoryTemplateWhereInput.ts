import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type CategoryTemplateWhereInput = {
  categoryId?: CategoryWhereUniqueInput;
  id?: StringFilter;
  templateId?: TemplateWhereUniqueInput;
};
