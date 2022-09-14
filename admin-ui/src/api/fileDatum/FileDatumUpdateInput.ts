import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FileViewUpdateManyWithoutFileDataInput } from "./FileViewUpdateManyWithoutFileDataInput";
import { HashtagFileUpdateManyWithoutFileDataInput } from "./HashtagFileUpdateManyWithoutFileDataInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";
import { RequestDatumUpdateManyWithoutFileDataInput } from "./RequestDatumUpdateManyWithoutFileDataInput";

export type FileDatumUpdateInput = {
  cateogyId?: CategoryWhereUniqueInput | null;
  deleted?: boolean | null;
  file?: string | null;
  fileType?: string | null;
  fileViews?: FileViewUpdateManyWithoutFileDataInput;
  hashtagFiles?: HashtagFileUpdateManyWithoutFileDataInput;
  isFile?: boolean | null;
  isGallery?: boolean | null;
  isPublic?: boolean | null;
  ownerId?: UserWhereUniqueInput | null;
  permissionId?: PermissionGroupWhereUniqueInput | null;
  requestData?: RequestDatumUpdateManyWithoutFileDataInput;
  title?: string | null;
};
