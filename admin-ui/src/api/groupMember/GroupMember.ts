import { Group } from "../group/Group";
import { User } from "../user/User";

export type GroupMember = {
  createdAt: Date;
  groupId?: Group | null;
  id: string;
  memberId?: User | null;
  updatedAt: Date;
};
