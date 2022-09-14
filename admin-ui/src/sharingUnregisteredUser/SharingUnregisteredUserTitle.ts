import { SharingUnregisteredUser as TSharingUnregisteredUser } from "../api/sharingUnregisteredUser/SharingUnregisteredUser";

export const SHARINGUNREGISTEREDUSER_TITLE_FIELD = "url";

export const SharingUnregisteredUserTitle = (
  record: TSharingUnregisteredUser
): string => {
  return record.url || record.id;
};
