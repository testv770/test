import { HashtagFile } from "../hashtagFile/HashtagFile";
import { User } from "../user/User";

export type Hashtag = {
  color: string | null;
  createdAt: Date;
  hashtagFiles?: Array<HashtagFile>;
  hashtagName: string | null;
  id: string;
  identityId?: User | null;
  updatedAt: Date;
};
