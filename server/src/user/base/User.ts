/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Audit } from "../../audit/base/Audit";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Contact } from "../../contact/base/Contact";
import { FileDatum } from "../../fileDatum/base/FileDatum";
import { FileViewSetting } from "../../fileViewSetting/base/FileViewSetting";
import { FileView } from "../../fileView/base/FileView";
import { GroupMember } from "../../groupMember/base/GroupMember";
import { Group } from "../../group/base/Group";
import { Hashtag } from "../../hashtag/base/Hashtag";
import { EnumUserBlock } from "../../enumUserBlock/base/EnumUserBlock";
import { LinkDatum } from "../../linkDatum/base/LinkDatum";
import { NetworkPost } from "../../networkPost/base/NetworkPost";
import { PermissionGroupName } from "../../permissionGroupName/base/PermissionGroupName";
import { Profile } from "../../profile/base/Profile";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
import { ShareIdentity } from "../../shareIdentity/base/ShareIdentity";
import { SharingUnregisteredUser } from "../../sharingUnregisteredUser/base/SharingUnregisteredUser";
import { SuggestionDatum } from "../../suggestionDatum/base/SuggestionDatum";
import { Template } from "../../template/base/Template";
import { UserFcm } from "../../userFcm/base/UserFcm";
import { UserLocation } from "../../userLocation/base/UserLocation";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Audit],
  })
  @ValidateNested()
  @Type(() => Audit)
  @IsOptional()
  audits?: Array<Audit>;

  @ApiProperty({
    required: false,
    type: () => [Contact],
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contactsContactId?: Array<Contact>;

  @ApiProperty({
    required: false,
    type: () => [Contact],
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contactsIdentityId?: Array<Contact>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: () => [FileDatum],
  })
  @ValidateNested()
  @Type(() => FileDatum)
  @IsOptional()
  fileData?: Array<FileDatum>;

  @ApiProperty({
    required: false,
    type: () => [FileViewSetting],
  })
  @ValidateNested()
  @Type(() => FileViewSetting)
  @IsOptional()
  fileViewSettings?: Array<FileViewSetting>;

  @ApiProperty({
    required: false,
    type: () => [FileView],
  })
  @ValidateNested()
  @Type(() => FileView)
  @IsOptional()
  fileViews_identity?: Array<FileView>;

  @ApiProperty({
    required: false,
    type: () => [FileView],
  })
  @ValidateNested()
  @Type(() => FileView)
  @IsOptional()
  fileViews_watchId?: Array<FileView>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [GroupMember],
  })
  @ValidateNested()
  @Type(() => GroupMember)
  @IsOptional()
  groupMembers?: Array<GroupMember>;

  @ApiProperty({
    required: false,
    type: () => [Group],
  })
  @ValidateNested()
  @Type(() => Group)
  @IsOptional()
  groups?: Array<Group>;

  @ApiProperty({
    required: false,
    type: () => [Hashtag],
  })
  @ValidateNested()
  @Type(() => Hashtag)
  @IsOptional()
  hashtags?: Array<Hashtag>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => EnumUserBlock,
  })
  @ValidateNested()
  @Type(() => EnumUserBlock)
  @IsOptional()
  isBlock?: EnumUserBlock | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRegistered!: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyReadFirebase!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [LinkDatum],
  })
  @ValidateNested()
  @Type(() => LinkDatum)
  @IsOptional()
  linkData?: Array<LinkDatum>;

  @ApiProperty({
    required: false,
    type: () => [NetworkPost],
  })
  @ValidateNested()
  @Type(() => NetworkPost)
  @IsOptional()
  networkPosts?: Array<NetworkPost>;

  @ApiProperty({
    required: false,
    type: () => [PermissionGroupName],
  })
  @ValidateNested()
  @Type(() => PermissionGroupName)
  @IsOptional()
  permissionGroupNames?: Array<PermissionGroupName>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: false,
    type: () => [Profile],
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  profiles?: Array<Profile>;

  @ApiProperty({
    required: false,
    type: () => [RequestDatum],
  })
  @ValidateNested()
  @Type(() => RequestDatum)
  @IsOptional()
  requestDataAdkId_adkId?: Array<RequestDatum>;

  @ApiProperty({
    required: false,
    type: () => [RequestDatum],
  })
  @ValidateNested()
  @Type(() => RequestDatum)
  @IsOptional()
  requestDataRecipientId?: Array<RequestDatum>;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => [ShareIdentity],
  })
  @ValidateNested()
  @Type(() => ShareIdentity)
  @IsOptional()
  shareIdentities?: Array<ShareIdentity>;

  @ApiProperty({
    required: false,
    type: () => [SharingUnregisteredUser],
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUser)
  @IsOptional()
  sharingUnregisteredUsers?: Array<SharingUnregisteredUser>;

  @ApiProperty({
    required: false,
    type: () => [SuggestionDatum],
  })
  @ValidateNested()
  @Type(() => SuggestionDatum)
  @IsOptional()
  suggestionData_recipientId?: Array<SuggestionDatum>;

  @ApiProperty({
    required: false,
    type: () => [SuggestionDatum],
  })
  @ValidateNested()
  @Type(() => SuggestionDatum)
  @IsOptional()
  suggestionData_suggestionId?: Array<SuggestionDatum>;

  @ApiProperty({
    required: false,
    type: () => [Template],
  })
  @ValidateNested()
  @Type(() => Template)
  @IsOptional()
  templates?: Array<Template>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UserFcm],
  })
  @ValidateNested()
  @Type(() => UserFcm)
  @IsOptional()
  userFcms?: Array<UserFcm>;

  @ApiProperty({
    required: false,
    type: () => [UserLocation],
  })
  @ValidateNested()
  @Type(() => UserLocation)
  @IsOptional()
  userLocations?: Array<UserLocation>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };