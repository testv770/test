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
import { ContactListRelationFilter } from "../../contact/base/ContactListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FileDatumListRelationFilter } from "../../fileDatum/base/FileDatumListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionGroupNameListRelationFilter } from "../../permissionGroupName/base/PermissionGroupNameListRelationFilter";
@InputType()
class PermissionGroupWhereInput {
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
  contacts?: ContactListRelationFilter;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  files?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  gallery?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  groupName?: StringNullableFilter;

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
  location?: BooleanNullableFilter;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  status?: BooleanNullableFilter;
}
export { PermissionGroupWhereInput };