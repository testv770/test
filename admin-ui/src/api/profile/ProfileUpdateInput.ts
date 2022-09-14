import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  backgroundImage?: string | null;
  categoryView?: CategoryWhereUniqueInput | null;
  content?: string | null;
  identityId?: UserWhereUniqueInput | null;
  image?: string | null;
  themeColor?: string | null;
  title?: string | null;
  totalFileWeight?: string | null;
};
