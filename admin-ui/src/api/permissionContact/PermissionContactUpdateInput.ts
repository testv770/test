import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type PermissionContactUpdateInput = {
  contactRelationId?: ContactWhereUniqueInput | null;
  files?: boolean | null;
  gallery?: boolean | null;
  location?: boolean | null;
  status?: boolean | null;
};
