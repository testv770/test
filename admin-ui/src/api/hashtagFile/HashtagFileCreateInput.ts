import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type HashtagFileCreateInput = {
  fileId?: FileDatumWhereUniqueInput | null;
  hashtagId?: HashtagWhereUniqueInput | null;
};
