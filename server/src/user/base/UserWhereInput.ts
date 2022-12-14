/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuditListRelationFilter } from "../../audit/base/AuditListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ContactListRelationFilter } from "../../contact/base/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileDatumListRelationFilter } from "../../fileDatum/base/FileDatumListRelationFilter";
import { FileViewSettingListRelationFilter } from "../../fileViewSetting/base/FileViewSettingListRelationFilter";
import { FileViewListRelationFilter } from "../../fileView/base/FileViewListRelationFilter";
import { GroupMemberListRelationFilter } from "../../groupMember/base/GroupMemberListRelationFilter";
import { GroupListRelationFilter } from "../../group/base/GroupListRelationFilter";
import { HashtagListRelationFilter } from "../../hashtag/base/HashtagListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { EnumUserBlockWhereUniqueInput } from "../../enumUserBlock/base/EnumUserBlockWhereUniqueInput";
import { LinkDatumListRelationFilter } from "../../linkDatum/base/LinkDatumListRelationFilter";
import { NetworkPostListRelationFilter } from "../../networkPost/base/NetworkPostListRelationFilter";
import { PermissionGroupNameListRelationFilter } from "../../permissionGroupName/base/PermissionGroupNameListRelationFilter";
import { ProfileListRelationFilter } from "../../profile/base/ProfileListRelationFilter";
import { RequestDatumListRelationFilter } from "../../requestDatum/base/RequestDatumListRelationFilter";
import { ShareIdentityListRelationFilter } from "../../shareIdentity/base/ShareIdentityListRelationFilter";
import { SharingUnregisteredUserListRelationFilter } from "../../sharingUnregisteredUser/base/SharingUnregisteredUserListRelationFilter";
import { SuggestionDatumListRelationFilter } from "../../suggestionDatum/base/SuggestionDatumListRelationFilter";
import { TemplateListRelationFilter } from "../../template/base/TemplateListRelationFilter";
import { UserFcmListRelationFilter } from "../../userFcm/base/UserFcmListRelationFilter";
import { UserLocationListRelationFilter } from "../../userLocation/base/UserLocationListRelationFilter";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => AuditListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AuditListRelationFilter)
  @IsOptional()
  @Field(() => AuditListRelationFilter, {
    nullable: true,
  })
  audits?: AuditListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContactListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactListRelationFilter)
  @IsOptional()
  @Field(() => ContactListRelationFilter, {
    nullable: true,
  })
  contactsContactId?: ContactListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContactListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactListRelationFilter)
  @IsOptional()
  @Field(() => ContactListRelationFilter, {
    nullable: true,
  })
  contactsIdentityId?: ContactListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  country?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FileDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileDatumListRelationFilter)
  @IsOptional()
  @Field(() => FileDatumListRelationFilter, {
    nullable: true,
  })
  fileData?: FileDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FileViewSettingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileViewSettingListRelationFilter)
  @IsOptional()
  @Field(() => FileViewSettingListRelationFilter, {
    nullable: true,
  })
  fileViewSettings?: FileViewSettingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FileViewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileViewListRelationFilter)
  @IsOptional()
  @Field(() => FileViewListRelationFilter, {
    nullable: true,
  })
  fileViews_identity?: FileViewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FileViewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileViewListRelationFilter)
  @IsOptional()
  @Field(() => FileViewListRelationFilter, {
    nullable: true,
  })
  fileViews_watchId?: FileViewListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => GroupMemberListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GroupMemberListRelationFilter)
  @IsOptional()
  @Field(() => GroupMemberListRelationFilter, {
    nullable: true,
  })
  groupMembers?: GroupMemberListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GroupListRelationFilter)
  @IsOptional()
  @Field(() => GroupListRelationFilter, {
    nullable: true,
  })
  groups?: GroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HashtagListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HashtagListRelationFilter)
  @IsOptional()
  @Field(() => HashtagListRelationFilter, {
    nullable: true,
  })
  hashtags?: HashtagListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isActive?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EnumUserBlockWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnumUserBlockWhereUniqueInput)
  @IsOptional()
  @Field(() => EnumUserBlockWhereUniqueInput, {
    nullable: true,
  })
  isBlock?: EnumUserBlockWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isRegistered?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  keyReadFirebase?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LinkDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LinkDatumListRelationFilter)
  @IsOptional()
  @Field(() => LinkDatumListRelationFilter, {
    nullable: true,
  })
  linkData?: LinkDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => NetworkPostListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NetworkPostListRelationFilter)
  @IsOptional()
  @Field(() => NetworkPostListRelationFilter, {
    nullable: true,
  })
  networkPosts?: NetworkPostListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameListRelationFilter)
  @IsOptional()
  @Field(() => PermissionGroupNameListRelationFilter, {
    nullable: true,
  })
  permissionGroupNames?: PermissionGroupNameListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  phone?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProfileListRelationFilter)
  @IsOptional()
  @Field(() => ProfileListRelationFilter, {
    nullable: true,
  })
  profiles?: ProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RequestDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RequestDatumListRelationFilter)
  @IsOptional()
  @Field(() => RequestDatumListRelationFilter, {
    nullable: true,
  })
  requestDataAdkId_adkId?: RequestDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RequestDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RequestDatumListRelationFilter)
  @IsOptional()
  @Field(() => RequestDatumListRelationFilter, {
    nullable: true,
  })
  requestDataRecipientId?: RequestDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ShareIdentityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ShareIdentityListRelationFilter)
  @IsOptional()
  @Field(() => ShareIdentityListRelationFilter, {
    nullable: true,
  })
  shareIdentities?: ShareIdentityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SharingUnregisteredUserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUserListRelationFilter)
  @IsOptional()
  @Field(() => SharingUnregisteredUserListRelationFilter, {
    nullable: true,
  })
  sharingUnregisteredUsers?: SharingUnregisteredUserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumListRelationFilter)
  @IsOptional()
  @Field(() => SuggestionDatumListRelationFilter, {
    nullable: true,
  })
  suggestionData_recipientId?: SuggestionDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumListRelationFilter)
  @IsOptional()
  @Field(() => SuggestionDatumListRelationFilter, {
    nullable: true,
  })
  suggestionData_suggestionId?: SuggestionDatumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TemplateListRelationFilter)
  @IsOptional()
  @Field(() => TemplateListRelationFilter, {
    nullable: true,
  })
  templates?: TemplateListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserFcmListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserFcmListRelationFilter)
  @IsOptional()
  @Field(() => UserFcmListRelationFilter, {
    nullable: true,
  })
  userFcms?: UserFcmListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserLocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserLocationListRelationFilter)
  @IsOptional()
  @Field(() => UserLocationListRelationFilter, {
    nullable: true,
  })
  userLocations?: UserLocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}
export { UserWhereInput };
