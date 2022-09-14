import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupTemplateListRelationFilter } from "../groupTemplate/GroupTemplateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupWhereInput = {
  groupMembers?: GroupMemberListRelationFilter;
  groupname?: StringNullableFilter;
  groupTemplates?: GroupTemplateListRelationFilter;
  id?: StringFilter;
  isDefaultGroup?: BooleanNullableFilter;
  ownerId?: UserWhereUniqueInput;
};
