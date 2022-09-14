import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FileViewCreateNestedManyWithoutFileDataInput } from "./FileViewCreateNestedManyWithoutFileDataInput";
import { HashtagFileCreateNestedManyWithoutFileDataInput } from "./HashtagFileCreateNestedManyWithoutFileDataInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../permissionGroup/PermissionGroupWhereUniqueInput";
import { RequestDatumCreateNestedManyWithoutFileDataInput } from "./RequestDatumCreateNestedManyWithoutFileDataInput";

export type FileDatumCreateInput = {
  cateogyId?: CategoryWhereUniqueInput | null;
  deleted?: boolean | null;
  file?: string | null;
  fileType?: string | null;
  fileViews?: FileViewCreateNestedManyWithoutFileDataInput;
  hashtagFiles?: HashtagFileCreateNestedManyWithoutFileDataInput;
  isFile?: boolean | null;
  isGallery?: boolean | null;
  isPublic?: boolean | null;
  ownerId?: UserWhereUniqueInput | null;
  permissionId?: PermissionGroupWhereUniqueInput | null;
  requestData?: RequestDatumCreateNestedManyWithoutFileDataInput;
  title?: string | null;
};
