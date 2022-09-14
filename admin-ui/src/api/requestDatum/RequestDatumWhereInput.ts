import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FileDatumWhereUniqueInput } from "../fileDatum/FileDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LinkDatumWhereUniqueInput } from "../linkDatum/LinkDatumWhereUniqueInput";
import { EnumRequestDatumWhereUniqueInput } from "../enumRequestDatum/EnumRequestDatumWhereUniqueInput";

export type RequestDatumWhereInput = {
  askId?: UserWhereUniqueInput;
  categoryRequestId?: CategoryWhereUniqueInput;
  duration?: DateTimeNullableFilter;
  fileId?: FileDatumWhereUniqueInput;
  id?: StringFilter;
  linkId?: LinkDatumWhereUniqueInput;
  recipientId?: UserWhereUniqueInput;
  statusId?: EnumRequestDatumWhereUniqueInput;
};
