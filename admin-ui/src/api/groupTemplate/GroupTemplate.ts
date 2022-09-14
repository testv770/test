import { Group } from "../group/Group";
import { Template } from "../template/Template";

export type GroupTemplate = {
  createdAt: Date;
  groupId?: Group | null;
  id: string;
  templateId?: Template | null;
  updatedAt: Date;
};
