import { CategoryTemplateCreateNestedManyWithoutCategoriesInput } from "./CategoryTemplateCreateNestedManyWithoutCategoriesInput";
import { FileDatumCreateNestedManyWithoutCategoriesInput } from "./FileDatumCreateNestedManyWithoutCategoriesInput";
import { LinkDatumCreateNestedManyWithoutCategoriesInput } from "./LinkDatumCreateNestedManyWithoutCategoriesInput";
import { ProfileCreateNestedManyWithoutCategoriesInput } from "./ProfileCreateNestedManyWithoutCategoriesInput";
import { RequestDatumCreateNestedManyWithoutCategoriesInput } from "./RequestDatumCreateNestedManyWithoutCategoriesInput";
import { SuggestionDatumCreateNestedManyWithoutCategoriesInput } from "./SuggestionDatumCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryName?: string | null;
  categoryTemplates?: CategoryTemplateCreateNestedManyWithoutCategoriesInput;
  fileData?: FileDatumCreateNestedManyWithoutCategoriesInput;
  linkData?: LinkDatumCreateNestedManyWithoutCategoriesInput;
  profiles?: ProfileCreateNestedManyWithoutCategoriesInput;
  requestData?: RequestDatumCreateNestedManyWithoutCategoriesInput;
  suggestionData?: SuggestionDatumCreateNestedManyWithoutCategoriesInput;
};
