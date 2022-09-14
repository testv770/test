import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RequestDatumCreateNestedManyWithoutLinkDataInput } from "./RequestDatumCreateNestedManyWithoutLinkDataInput";

export type LinkDatumCreateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  isPublic?: boolean | null;
  link?: string | null;
  ownerId?: UserWhereUniqueInput | null;
  requestData?: RequestDatumCreateNestedManyWithoutLinkDataInput;
  title?: string | null;
};
