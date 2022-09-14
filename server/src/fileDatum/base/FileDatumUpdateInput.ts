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
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { FileViewUpdateManyWithoutFileDataInput } from "./FileViewUpdateManyWithoutFileDataInput";
import { HashtagFileUpdateManyWithoutFileDataInput } from "./HashtagFileUpdateManyWithoutFileDataInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PermissionGroupWhereUniqueInput } from "../../permissionGroup/base/PermissionGroupWhereUniqueInput";
import { RequestDatumUpdateManyWithoutFileDataInput } from "./RequestDatumUpdateManyWithoutFileDataInput";
@InputType()
class FileDatumUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  cateogyId?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  deleted?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  file?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileType?: string | null;

  @ApiProperty({
    required: false,
    type: () => FileViewUpdateManyWithoutFileDataInput,
  })
  @ValidateNested()
  @Type(() => FileViewUpdateManyWithoutFileDataInput)
  @IsOptional()
  @Field(() => FileViewUpdateManyWithoutFileDataInput, {
    nullable: true,
  })
  fileViews?: FileViewUpdateManyWithoutFileDataInput;

  @ApiProperty({
    required: false,
    type: () => HashtagFileUpdateManyWithoutFileDataInput,
  })
  @ValidateNested()
  @Type(() => HashtagFileUpdateManyWithoutFileDataInput)
  @IsOptional()
  @Field(() => HashtagFileUpdateManyWithoutFileDataInput, {
    nullable: true,
  })
  hashtagFiles?: HashtagFileUpdateManyWithoutFileDataInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFile?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isGallery?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPublic?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  ownerId?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => PermissionGroupWhereUniqueInput, {
    nullable: true,
  })
  permissionId?: PermissionGroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RequestDatumUpdateManyWithoutFileDataInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumUpdateManyWithoutFileDataInput)
  @IsOptional()
  @Field(() => RequestDatumUpdateManyWithoutFileDataInput, {
    nullable: true,
  })
  requestData?: RequestDatumUpdateManyWithoutFileDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { FileDatumUpdateInput };