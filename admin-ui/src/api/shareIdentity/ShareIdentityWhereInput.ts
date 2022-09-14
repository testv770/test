import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShareIdentityWhereInput = {
  id?: StringFilter;
  identitySharedId?: UserWhereUniqueInput;
};
