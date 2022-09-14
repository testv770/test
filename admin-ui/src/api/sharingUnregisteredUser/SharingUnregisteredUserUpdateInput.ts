import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SharingUnregisteredUserUpdateInput = {
  expiration?: Date | null;
  sharingId?: UserWhereUniqueInput | null;
  url?: string | null;
};
