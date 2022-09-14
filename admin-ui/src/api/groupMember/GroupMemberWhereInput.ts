import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberWhereInput = {
  groupId?: GroupWhereUniqueInput;
  id?: StringFilter;
  memberId?: UserWhereUniqueInput;
};
