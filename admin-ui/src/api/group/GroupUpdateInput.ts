import { GroupMemberUpdateManyWithoutGroupsInput } from "./GroupMemberUpdateManyWithoutGroupsInput";
import { GroupTemplateUpdateManyWithoutGroupsInput } from "./GroupTemplateUpdateManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupUpdateInput = {
  groupMembers?: GroupMemberUpdateManyWithoutGroupsInput;
  groupname?: string | null;
  groupTemplates?: GroupTemplateUpdateManyWithoutGroupsInput;
  isDefaultGroup?: boolean | null;
  ownerId?: UserWhereUniqueInput | null;
};
