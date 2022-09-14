import { CategoryTemplateWhereInput } from "./CategoryTemplateWhereInput";
import { CategoryTemplateOrderByInput } from "./CategoryTemplateOrderByInput";

export type CategoryTemplateFindManyArgs = {
  where?: CategoryTemplateWhereInput;
  orderBy?: Array<CategoryTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
