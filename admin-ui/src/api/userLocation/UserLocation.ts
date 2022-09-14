import { User } from "../user/User";

export type UserLocation = {
  createdAt: Date;
  id: string;
  identityId?: User | null;
  isPublicLocation: boolean | null;
  updatedAt: Date;
};
