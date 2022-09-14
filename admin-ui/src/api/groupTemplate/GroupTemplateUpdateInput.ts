import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupTemplateUpdateInput = {
  groupId?: GroupWhereUniqueInput | null;
  templateId?: TemplateWhereUniqueInput | null;
};
