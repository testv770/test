import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFcmUpdateInput = {
  fcm?: string | null;
  user?: UserWhereUniqueInput | null;
};
