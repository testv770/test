import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { HashtagWhereUniqueInput } from "../hashtag/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type HashtagFileWhereInput = {
  fileId?: FileDatumWhereUniqueInput;
  hashtagId?: HashtagWhereUniqueInput;
  id?: StringFilter;
};
