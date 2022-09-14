import { GroupMemberCreateNestedManyWithoutGroupsInput } from "./GroupMemberCreateNestedManyWithoutGroupsInput";
import { GroupTemplateCreateNestedManyWithoutGroupsInput } from "./GroupTemplateCreateNestedManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupCreateInput = {
  groupMembers?: GroupMemberCreateNestedManyWithoutGroupsInput;
  groupname?: string | null;
  groupTemplates?: GroupTemplateCreateNestedManyWithoutGroupsInput;
  isDefaultGroup?: boolean | null;
  ownerId?: UserWhereUniqueInput | null;
};
