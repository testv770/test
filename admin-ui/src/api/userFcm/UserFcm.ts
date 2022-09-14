import { User } from "../user/User";

export type UserFcm = {
  createdAt: Date;
  fcm: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
