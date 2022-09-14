import { Category } from "../category/Category";
import { Template } from "../template/Template";

export type CategoryTemplate = {
  categoryId?: Category | null;
  createdAt: Date;
  id: string;
  templateId?: Template | null;
  updatedAt: Date;
};
