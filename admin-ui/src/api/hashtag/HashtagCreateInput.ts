import { HashtagFileCreateNestedManyWithoutHashtagsInput } from "./HashtagFileCreateNestedManyWithoutHashtagsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HashtagCreateInput = {
  color?: string | null;
  hashtagFiles?: HashtagFileCreateNestedManyWithoutHashtagsInput;
  hashtagName?: string | null;
  identityId?: UserWhereUniqueInput | null;
};
