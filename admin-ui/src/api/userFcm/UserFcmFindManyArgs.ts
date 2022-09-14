import { UserFcmWhereInput } from "./UserFcmWhereInput";
import { UserFcmOrderByInput } from "./UserFcmOrderByInput";

export type UserFcmFindManyArgs = {
  where?: UserFcmWhereInput;
  orderBy?: Array<UserFcmOrderByInput>;
  skip?: number;
  take?: number;
};
