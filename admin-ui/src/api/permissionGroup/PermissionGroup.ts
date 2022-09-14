import { Contact } from "../contact/Contact";
import { FileDatum } from "../fileDatum/FileDatum";
import { PermissionGroupName } from "../permissionGroupName/PermissionGroupName";

export type PermissionGroup = {
  contacts?: Array<Contact>;
  createdAt: Date;
  fileData?: Array<FileDatum>;
  files: boolean | null;
  gallery: boolean | null;
  groupName: string | null;
  id: string;
  location: boolean | null;
  permissionGroupNames?: Array<PermissionGroupName>;
  status: boolean | null;
  updatedAt: Date;
};
