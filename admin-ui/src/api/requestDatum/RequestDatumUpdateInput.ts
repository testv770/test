import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { LinkDatumWhereUniqueInput } from "../linkDatum/LinkDatumWhereUniqueInput";
import { EnumRequestDatumWhereUniqueInput } from "../enumRequestDatum/EnumRequestDatumWhereUniqueInput";

export type RequestDatumUpdateInput = {
  askId?: UserWhereUniqueInput | null;
  categoryRequestId?: CategoryWhereUniqueInput | null;
  duration?: Date | null;
  fileId?: FileDatumWhereUniqueInput | null;
  linkId?: LinkDatumWhereUniqueInput | null;
  recipientId?: UserWhereUniqueInput | null;
  statusId?: EnumRequestDatumWhereUniqueInput | null;
};
