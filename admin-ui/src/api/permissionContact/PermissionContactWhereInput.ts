import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PermissionContactWhereInput = {
  contactRelationId?: ContactWhereUniqueInput;
  files?: BooleanNullableFilter;
  gallery?: BooleanNullableFilter;
  id?: StringFilter;
  location?: BooleanNullableFilter;
  status?: BooleanNullableFilter;
};
