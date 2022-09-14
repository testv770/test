import { User } from "../user/User";
import { Category } from "../category/Category";
import { FileDatum } from "../fileDatum/FileDatum";
import { LinkDatum } from "../linkDatum/LinkDatum";
import { EnumRequestDatum } from "../enumRequestDatum/EnumRequestDatum";

export type RequestDatum = {
  askId?: User | null;
  categoryRequestId?: Category | null;
  createdAt: Date;
  duration: Date | null;
  fileId?: FileDatum | null;
  id: string;
  linkId?: LinkDatum | null;
  recipientId?: User | null;
  statusId?: EnumRequestDatum | null;
  updatedAt: Date;
};
