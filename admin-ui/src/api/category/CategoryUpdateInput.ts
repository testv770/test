import { CategoryTemplateUpdateManyWithoutCategoriesInput } from "./CategoryTemplateUpdateManyWithoutCategoriesInput";
import { FileDatumUpdateManyWithoutCategoriesInput } from "./FileDatumUpdateManyWithoutCategoriesInput";
import { LinkDatumUpdateManyWithoutCategoriesInput } from "./LinkDatumUpdateManyWithoutCategoriesInput";
import { ProfileUpdateManyWithoutCategoriesInput } from "./ProfileUpdateManyWithoutCategoriesInput";
import { RequestDatumUpdateManyWithoutCategoriesInput } from "./RequestDatumUpdateManyWithoutCategoriesInput";
import { SuggestionDatumUpdateManyWithoutCategoriesInput } from "./SuggestionDatumUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryName?: string | null;
  categoryTemplates?: CategoryTemplateUpdateManyWithoutCategoriesInput;
  fileData?: FileDatumUpdateManyWithoutCategoriesInput;
  linkData?: LinkDatumUpdateManyWithoutCategoriesInput;
  profiles?: ProfileUpdateManyWithoutCategoriesInput;
  requestData?: RequestDatumUpdateManyWithoutCategoriesInput;
  suggestionData?: SuggestionDatumUpdateManyWithoutCategoriesInput;
};
