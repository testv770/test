import { Category } from "../category/Category";
import { FileView } from "../fileView/FileView";
import { HashtagFile } from "../hashtagFile/HashtagFile";
import { User } from "../user/User";
import { PermissionGroup } from "../permissionGroup/PermissionGroup";
import { RequestDatum } from "../requestDatum/RequestDatum";

export type FileDatum = {
  cateogyId?: Category | null;
  createdAt: Date;
  deleted: boolean | null;
  file: string | null;
  fileType: string | null;
  fileViews?: Array<FileView>;
  hashtagFiles?: Array<HashtagFile>;
  id: string;
  isFile: boolean | null;
  isGallery: boolean | null;
  isPublic: boolean | null;
  ownerId?: User | null;
  permissionId?: PermissionGroup | null;
  requestData?: Array<RequestDatum>;
  title: string | null;
  updatedAt: Date;
};
