import { Category } from "../category/Category";
import { User } from "../user/User";
import { RequestDatum } from "../requestDatum/RequestDatum";

export type LinkDatum = {
  categoryId?: Category | null;
  createdAt: Date;
  id: string;
  isPublic: boolean | null;
  link: string | null;
  ownerId?: User | null;
  requestData?: Array<RequestDatum>;
  title: string | null;
  updatedAt: Date;
};
