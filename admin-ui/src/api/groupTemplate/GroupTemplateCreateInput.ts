import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupTemplateCreateInput = {
  groupId?: GroupWhereUniqueInput | null;
  templateId?: TemplateWhereUniqueInput | null;
};
