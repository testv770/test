import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberCreateInput = {
  groupId?: GroupWhereUniqueInput | null;
  memberId?: UserWhereUniqueInput | null;
};
