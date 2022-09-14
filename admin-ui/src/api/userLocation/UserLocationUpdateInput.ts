import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLocationUpdateInput = {
  identityId?: UserWhereUniqueInput | null;
  isPublicLocation?: boolean | null;
};
