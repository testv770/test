import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserLocationCreateInput = {
  identityId?: UserWhereUniqueInput | null;
  isPublicLocation?: boolean | null;
};
