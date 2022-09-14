import { GroupMember } from "../groupMember/GroupMember";
import { GroupTemplate } from "../groupTemplate/GroupTemplate";
import { User } from "../user/User";

export type Group = {
  createdAt: Date;
  groupMembers?: Array<GroupMember>;
  groupname: string | null;
  groupTemplates?: Array<GroupTemplate>;
  id: string;
  isDefaultGroup: boolean | null;
  ownerId?: User | null;
  updatedAt: Date;
};
