import { UserFcm as TUserFcm } from "../api/userFcm/UserFcm";

export const USERFCM_TITLE_FIELD = "fcm";

export const UserFcmTitle = (record: TUserFcm): string => {
  return record.fcm || record.id;
};
