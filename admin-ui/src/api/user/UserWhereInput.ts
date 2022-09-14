import { AuditListRelationFilter } from "../audit/AuditListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileDatumListRelationFilter } from "../fileDatum/FileDatumListRelationFilter";
import { FileViewSettingListRelationFilter } from "../fileViewSetting/FileViewSettingListRelationFilter";
import { FileViewListRelationFilter } from "../fileView/FileViewListRelationFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { HashtagListRelationFilter } from "../hashtag/HashtagListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { EnumUserBlockWhereUniqueInput } from "../enumUserBlock/EnumUserBlockWhereUniqueInput";
import { LinkDatumListRelationFilter } from "../linkDatum/LinkDatumListRelationFilter";
import { NetworkPostListRelationFilter } from "../networkPost/NetworkPostListRelationFilter";
import { PermissionGroupNameListRelationFilter } from "../permissionGroupName/PermissionGroupNameListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { RequestDatumListRelationFilter } from "../requestDatum/RequestDatumListRelationFilter";
import { ShareIdentityListRelationFilter } from "../shareIdentity/ShareIdentityListRelationFilter";
import { SharingUnregisteredUserListRelationFilter } from "../sharingUnregisteredUser/SharingUnregisteredUserListRelationFilter";
import { SuggestionDatumListRelationFilter } from "../suggestionDatum/SuggestionDatumListRelationFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";
import { UserFcmListRelationFilter } from "../userFcm/UserFcmListRelationFilter";
import { UserLocationListRelationFilter } from "../userLocation/UserLocationListRelationFilter";

export type UserWhereInput = {
  audits?: AuditListRelationFilter;
  contactsContactId?: ContactListRelationFilter;
  contactsIdentityId?: ContactListRelationFilter;
  country?: StringNullableFilter;
  email?: StringNullableFilter;
  fileData?: FileDatumListRelationFilter;
  fileViewSettings?: FileViewSettingListRelationFilter;
  fileViews_identity?: FileViewListRelationFilter;
  fileViews_watchId?: FileViewListRelationFilter;
  firstName?: StringNullableFilter;
  groupMembers?: GroupMemberListRelationFilter;
  groups?: GroupListRelationFilter;
  hashtags?: HashtagListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isBlock?: EnumUserBlockWhereUniqueInput;
  isRegistered?: BooleanNullableFilter;
  keyReadFirebase?: StringNullableFilter;
  lastName?: StringNullableFilter;
  linkData?: LinkDatumListRelationFilter;
  networkPosts?: NetworkPostListRelationFilter;
  permissionGroupNames?: PermissionGroupNameListRelationFilter;
  phone?: StringFilter;
  profiles?: ProfileListRelationFilter;
  requestDataAdkId_adkId?: RequestDatumListRelationFilter;
  requestDataRecipientId?: RequestDatumListRelationFilter;
  shareIdentities?: ShareIdentityListRelationFilter;
  sharingUnregisteredUsers?: SharingUnregisteredUserListRelationFilter;
  suggestionData_recipientId?: SuggestionDatumListRelationFilter;
  suggestionData_suggestionId?: SuggestionDatumListRelationFilter;
  templates?: TemplateListRelationFilter;
  userFcms?: UserFcmListRelationFilter;
  userLocations?: UserLocationListRelationFilter;
  username?: StringFilter;
};
