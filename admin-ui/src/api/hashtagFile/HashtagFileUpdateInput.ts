import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";

export type HashtagFileUpdateInput = {
  fileId?: FileDatumWhereUniqueInput | null;
  hashtagId?: HashtagWhereUniqueInput | null;
};
