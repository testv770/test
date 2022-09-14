import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "groupname";

export const GroupTitle = (record: TGroup): string => {
  return record.groupname || record.id;
};
