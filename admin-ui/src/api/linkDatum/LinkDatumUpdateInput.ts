import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RequestDatumUpdateManyWithoutLinkDataInput } from "./RequestDatumUpdateManyWithoutLinkDataInput";

export type LinkDatumUpdateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  isPublic?: boolean | null;
  link?: string | null;
  ownerId?: UserWhereUniqueInput | null;
  requestData?: RequestDatumUpdateManyWithoutLinkDataInput;
  title?: string | null;
};
