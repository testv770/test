import { HashtagFileWhereInput } from "./HashtagFileWhereInput";
import { HashtagFileOrderByInput } from "./HashtagFileOrderByInput";

export type HashtagFileFindManyArgs = {
  where?: HashtagFileWhereInput;
  orderBy?: Array<HashtagFileOrderByInput>;
  skip?: number;
  take?: number;
};
