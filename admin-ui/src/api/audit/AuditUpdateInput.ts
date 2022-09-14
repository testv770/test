import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditUpdateInput = {
  additionalInfo?: string | null;
  clientIp?: string | null;
  reqFullUrl?: string | null;
  reqMethod?: string | null;
  reqUrl?: string | null;
  resCode?: string | null;
  resMessage?: string | null;
  title?: string | null;
  userId?: UserWhereUniqueInput | null;
  userName?: string | null;
  userType?: string | null;
};
