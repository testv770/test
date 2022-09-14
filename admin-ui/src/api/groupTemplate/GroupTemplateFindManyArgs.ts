import { GroupTemplateWhereInput } from "./GroupTemplateWhereInput";
import { GroupTemplateOrderByInput } from "./GroupTemplateOrderByInput";

export type GroupTemplateFindManyArgs = {
  where?: GroupTemplateWhereInput;
  orderBy?: Array<GroupTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
