import { SortOrder } from "../../util/SortOrder";

export type AuditOrderByInput = {
  additionalInfo?: SortOrder;
  clientIp?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  reqFullUrl?: SortOrder;
  reqMethod?: SortOrder;
  reqUrl?: SortOrder;
  resCode?: SortOrder;
  resMessage?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
  userName?: SortOrder;
  userType?: SortOrder;
};
