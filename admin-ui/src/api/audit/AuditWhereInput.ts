import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditWhereInput = {
  additionalInfo?: StringNullableFilter;
  clientIp?: StringNullableFilter;
  id?: StringFilter;
  reqFullUrl?: StringNullableFilter;
  reqMethod?: StringNullableFilter;
  reqUrl?: StringNullableFilter;
  resCode?: StringNullableFilter;
  resMessage?: StringNullableFilter;
  title?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
  userName?: StringNullableFilter;
  userType?: StringNullableFilter;
};
