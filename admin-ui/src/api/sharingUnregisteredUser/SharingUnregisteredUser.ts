import { User } from "../user/User";

export type SharingUnregisteredUser = {
  createdAt: Date;
  expiration: Date | null;
  id: string;
  sharingId?: User | null;
  updatedAt: Date;
  url: string | null;
};
