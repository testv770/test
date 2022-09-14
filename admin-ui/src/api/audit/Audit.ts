import { User } from "../user/User";

export type Audit = {
  additionalInfo: string | null;
  clientIp: string | null;
  createdAt: Date;
  id: string;
  reqFullUrl: string | null;
  reqMethod: string | null;
  reqUrl: string | null;
  resCode: string | null;
  resMessage: string | null;
  title: string | null;
  updatedAt: Date;
  userId?: User | null;
  userName: string | null;
  userType: string | null;
};
