import { ShareIdentity as TShareIdentity } from "../api/shareIdentity/ShareIdentity";

export const SHAREIDENTITY_TITLE_FIELD = "id";

export const ShareIdentityTitle = (record: TShareIdentity): string => {
  return record.id || record.id;
};
