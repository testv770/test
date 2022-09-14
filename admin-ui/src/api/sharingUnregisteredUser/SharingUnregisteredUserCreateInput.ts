import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SharingUnregisteredUserCreateInput = {
  expiration?: Date | null;
  sharingId?: UserWhereUniqueInput | null;
  url?: string | null;
};
