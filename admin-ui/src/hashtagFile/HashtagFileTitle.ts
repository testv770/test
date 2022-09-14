import { HashtagFile as THashtagFile } from "../api/hashtagFile/HashtagFile";

export const HASHTAGFILE_TITLE_FIELD = "id";

export const HashtagFileTitle = (record: THashtagFile): string => {
  return record.id || record.id;
};
