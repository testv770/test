import { Contact } from "../contact/Contact";

export type PermissionContact = {
  contactRelationId?: Contact | null;
  createdAt: Date;
  files: boolean | null;
  gallery: boolean | null;
  id: string;
  location: boolean | null;
  status: boolean | null;
  updatedAt: Date;
};
