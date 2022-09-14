import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberUpdateInput = {
  groupId?: GroupWhereUniqueInput | null;
  memberId?: UserWhereUniqueInput | null;
};
