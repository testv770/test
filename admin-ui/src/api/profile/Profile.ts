import { Category } from "../category/Category";
import { User } from "../user/User";

export type Profile = {
  backgroundImage: string | null;
  categoryView?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  identityId?: User | null;
  image: string | null;
  themeColor: string | null;
  title: string | null;
  totalFileWeight: string | null;
  updatedAt: Date;
};
