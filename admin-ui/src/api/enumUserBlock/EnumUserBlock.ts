import { User } from "../user/User";

export type EnumUserBlock = {
  createdAt: Date;
  id: string;
  status?: "block" | "frozen" | "active" | null;
  updatedAt: Date;
  users?: Array<User>;
};
