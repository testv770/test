import { AuditCreateNestedManyWithoutUsersInput } from "./AuditCreateNestedManyWithoutUsersInput";
import { ContactCreateNestedManyWithoutUsersInput } from "./ContactCreateNestedManyWithoutUsersInput";
import { FileDatumCreateNestedManyWithoutUsersInput } from "./FileDatumCreateNestedManyWithoutUsersInput";
import { FileViewSettingCreateNestedManyWithoutUsersInput } from "./FileViewSettingCreateNestedManyWithoutUsersInput";
import { FileViewCreateNestedManyWithoutUsersInput } from "./FileViewCreateNestedManyWithoutUsersInput";
import { GroupMemberCreateNestedManyWithoutUsersInput } from "./GroupMemberCreateNestedManyWithoutUsersInput";
import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { HashtagCreateNestedManyWithoutUsersInput } from "./HashtagCreateNestedManyWithoutUsersInput";
import { EnumUserBlockWhereUniqueInput } from "../enumUserBlock/EnumUserBlockWhereUniqueInput";
import { LinkDatumCreateNestedManyWithoutUsersInput } from "./LinkDatumCreateNestedManyWithoutUsersInput";
import { NetworkPostCreateNestedManyWithoutUsersInput } from "./NetworkPostCreateNestedManyWithoutUsersInput";
import { PermissionGroupNameCreateNestedManyWithoutUsersInput } from "./PermissionGroupNameCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { RequestDatumCreateNestedManyWithoutUsersInput } from "./RequestDatumCreateNestedManyWithoutUsersInput";
import { ShareIdentityCreateNestedManyWithoutUsersInput } from "./ShareIdentityCreateNestedManyWithoutUsersInput";
import { SharingUnregisteredUserCreateNestedManyWithoutUsersInput } from "./SharingUnregisteredUserCreateNestedManyWithoutUsersInput";
import { SuggestionDatumCreateNestedManyWithoutUsersInput } from "./SuggestionDatumCreateNestedManyWithoutUsersInput";
import { TemplateCreateNestedManyWithoutUsersInput } from "./TemplateCreateNestedManyWithoutUsersInput";
import { UserFcmCreateNestedManyWithoutUsersInput } from "./UserFcmCreateNestedManyWithoutUsersInput";
import { UserLocationCreateNestedManyWithoutUsersInput } from "./UserLocationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  audits?: AuditCreateNestedManyWithoutUsersInput;
  contactsContactId?: ContactCreateNestedManyWithoutUsersInput;
  contactsIdentityId?: ContactCreateNestedManyWithoutUsersInput;
  country?: string | null;
  email?: string | null;
  fileData?: FileDatumCreateNestedManyWithoutUsersInput;
  fileViewSettings?: FileViewSettingCreateNestedManyWithoutUsersInput;
  fileViews_identity?: FileViewCreateNestedManyWithoutUsersInput;
  fileViews_watchId?: FileViewCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  groupMembers?: GroupMemberCreateNestedManyWithoutUsersInput;
  groups?: GroupCreateNestedManyWithoutUsersInput;
  hashtags?: HashtagCreateNestedManyWithoutUsersInput;
  isActive?: boolean | null;
  isBlock?: EnumUserBlockWhereUniqueInput | null;
  isRegistered?: boolean | null;
  keyReadFirebase?: string | null;
  lastName?: string | null;
  linkData?: LinkDatumCreateNestedManyWithoutUsersInput;
  networkPosts?: NetworkPostCreateNestedManyWithoutUsersInput;
  password: string;
  permissionGroupNames?: PermissionGroupNameCreateNestedManyWithoutUsersInput;
  phone: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  requestDataAdkId_adkId?: RequestDatumCreateNestedManyWithoutUsersInput;
  requestDataRecipientId?: RequestDatumCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  shareIdentities?: ShareIdentityCreateNestedManyWithoutUsersInput;
  sharingUnregisteredUsers?: SharingUnregisteredUserCreateNestedManyWithoutUsersInput;
  suggestionData_recipientId?: SuggestionDatumCreateNestedManyWithoutUsersInput;
  suggestionData_suggestionId?: SuggestionDatumCreateNestedManyWithoutUsersInput;
  templates?: TemplateCreateNestedManyWithoutUsersInput;
  userFcms?: UserFcmCreateNestedManyWithoutUsersInput;
  userLocations?: UserLocationCreateNestedManyWithoutUsersInput;
  username: string;
};