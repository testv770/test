import { SortOrder } from "../../util/SortOrder";

export type FileDatumOrderByInput = {
  cateogyIdId?: SortOrder;
  createdAt?: SortOrder;
  deleted?: SortOrder;
  file?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  isFile?: SortOrder;
  isGallery?: SortOrder;
  isPublic?: SortOrder;
  ownerIdId?: SortOrder;
  permissionIdId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
