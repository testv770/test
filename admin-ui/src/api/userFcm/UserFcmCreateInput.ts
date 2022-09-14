import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFcmCreateInput = {
  fcm?: string | null;
  user?: UserWhereUniqueInput | null;
};
