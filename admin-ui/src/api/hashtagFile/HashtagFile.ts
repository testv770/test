import { FileDatum } from "../fileDatum/FileDatum";
import { Hashtag } from "../hashtag/Hashtag";

export type HashtagFile = {
  createdAt: Date;
  fileId?: FileDatum | null;
  hashtagId?: Hashtag | null;
  id: string;
  updatedAt: Date;
};
