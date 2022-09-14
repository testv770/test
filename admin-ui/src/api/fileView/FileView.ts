import { FileDatum } from "../fileDatum/FileDatum";
import { User } from "../user/User";

export type FileView = {
  createdAt: Date;
  fileId?: FileDatum | null;
  id: string;
  identity?: User | null;
  updatedAt: Date;
  watchId?: User | null;
};
