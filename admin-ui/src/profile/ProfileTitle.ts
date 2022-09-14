import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "title";

export const ProfileTitle = (record: TProfile): string => {
  return record.title || record.id;
};
