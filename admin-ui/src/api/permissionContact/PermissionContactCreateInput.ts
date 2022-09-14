import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type PermissionContactCreateInput = {
  contactRelationId?: ContactWhereUniqueInput | null;
  files?: boolean | null;
  gallery?: boolean | null;
  location?: boolean | null;
  status?: boolean | null;
};
