import { Hashtag as THashtag } from "../api/hashtag/Hashtag";

export const HASHTAG_TITLE_FIELD = "hashtagName";

export const HashtagTitle = (record: THashtag): string => {
  return record.hashtagName || record.id;
};
