import { User } from "../user/User";

export type ShareIdentity = {
  createdAt: Date;
  id: string;
  identitySharedId?: User | null;
  updatedAt: Date;
};
