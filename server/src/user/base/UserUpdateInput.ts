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
import { AuditUpdateManyWithoutUsersInput } from "./AuditUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { ContactUpdateManyWithoutUsersInput } from "./ContactUpdateManyWithoutUsersInput";
import { FileDatumUpdateManyWithoutUsersInput } from "./FileDatumUpdateManyWithoutUsersInput";
import { FileViewSettingUpdateManyWithoutUsersInput } from "./FileViewSettingUpdateManyWithoutUsersInput";
import { FileViewUpdateManyWithoutUsersInput } from "./FileViewUpdateManyWithoutUsersInput";
import { GroupMemberUpdateManyWithoutUsersInput } from "./GroupMemberUpdateManyWithoutUsersInput";
import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { HashtagUpdateManyWithoutUsersInput } from "./HashtagUpdateManyWithoutUsersInput";
import { EnumUserBlockWhereUniqueInput } from "../../enumUserBlock/base/EnumUserBlockWhereUniqueInput";
import { LinkDatumUpdateManyWithoutUsersInput } from "./LinkDatumUpdateManyWithoutUsersInput";
import { NetworkPostUpdateManyWithoutUsersInput } from "./NetworkPostUpdateManyWithoutUsersInput";
import { PermissionGroupNameUpdateManyWithoutUsersInput } from "./PermissionGroupNameUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { RequestDatumUpdateManyWithoutUsersInput } from "./RequestDatumUpdateManyWithoutUsersInput";
import { ShareIdentityUpdateManyWithoutUsersInput } from "./ShareIdentityUpdateManyWithoutUsersInput";
import { SharingUnregisteredUserUpdateManyWithoutUsersInput } from "./SharingUnregisteredUserUpdateManyWithoutUsersInput";
import { SuggestionDatumUpdateManyWithoutUsersInput } from "./SuggestionDatumUpdateManyWithoutUsersInput";
import { TemplateUpdateManyWithoutUsersInput } from "./TemplateUpdateManyWithoutUsersInput";
import { UserFcmUpdateManyWithoutUsersInput } from "./UserFcmUpdateManyWithoutUsersInput";
import { UserLocationUpdateManyWithoutUsersInput } from "./UserLocationUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AuditUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AuditUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AuditUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  audits?: AuditUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  contactsContactId?: ContactUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  contactsIdentityId?: ContactUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FileDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FileDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FileDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  fileData?: FileDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FileViewSettingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FileViewSettingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FileViewSettingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  fileViewSettings?: FileViewSettingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FileViewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FileViewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FileViewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  fileViews_identity?: FileViewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FileViewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FileViewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FileViewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  fileViews_watchId?: FileViewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupMemberUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupMemberUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  groupMembers?: GroupMemberUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  groups?: GroupUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HashtagUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HashtagUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HashtagUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  hashtags?: HashtagUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

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
  isBlock?: EnumUserBlockWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRegistered?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyReadFirebase?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LinkDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LinkDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LinkDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  linkData?: LinkDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => NetworkPostUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NetworkPostUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NetworkPostUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  networkPosts?: NetworkPostUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PermissionGroupNameUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  permissionGroupNames?: PermissionGroupNameUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string;

  @ApiProperty({
    required: false,
    type: () => ProfileUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProfileUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProfileUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  profiles?: ProfileUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => RequestDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RequestDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  requestDataAdkId_adkId?: RequestDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => RequestDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RequestDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  requestDataRecipientId?: RequestDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: () => ShareIdentityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ShareIdentityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ShareIdentityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  shareIdentities?: ShareIdentityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SharingUnregisteredUserUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUserUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SharingUnregisteredUserUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  sharingUnregisteredUsers?: SharingUnregisteredUserUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SuggestionDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  suggestionData_recipientId?: SuggestionDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SuggestionDatumUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  suggestionData_suggestionId?: SuggestionDatumUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TemplateUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TemplateUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TemplateUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  templates?: TemplateUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserFcmUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserFcmUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserFcmUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userFcms?: UserFcmUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserLocationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserLocationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserLocationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userLocations?: UserLocationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
