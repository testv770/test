import { CategoryTemplate } from "../categoryTemplate/CategoryTemplate";
import { GroupTemplate } from "../groupTemplate/GroupTemplate";
import { User } from "../user/User";

export type Template = {
  categoryTemplates?: Array<CategoryTemplate>;
  createdAt: Date;
  groupTemplates?: Array<GroupTemplate>;
  id: string;
  ownerId?: User | null;
  templateName: string | null;
  updatedAt: Date;
};
