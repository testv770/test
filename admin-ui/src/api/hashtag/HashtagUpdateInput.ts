import { HashtagFileUpdateManyWithoutHashtagsInput } from "./HashtagFileUpdateManyWithoutHashtagsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HashtagUpdateInput = {
  color?: string | null;
  hashtagFiles?: HashtagFileUpdateManyWithoutHashtagsInput;
  hashtagName?: string | null;
  identityId?: UserWhereUniqueInput | null;
};
