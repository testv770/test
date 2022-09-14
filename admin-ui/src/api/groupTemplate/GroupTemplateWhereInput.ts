import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupTemplateWhereInput = {
  groupId?: GroupWhereUniqueInput;
  id?: StringFilter;
  templateId?: TemplateWhereUniqueInput;
};
