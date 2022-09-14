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
import { ContactCreateNestedManyWithoutPermissionGroupsInput } from "./ContactCreateNestedManyWithoutPermissionGroupsInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { FileDatumCreateNestedManyWithoutPermissionGroupsInput } from "./FileDatumCreateNestedManyWithoutPermissionGroupsInput";
import { PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput } from "./PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput";
@InputType()
class PermissionGroupCreateInput {
  @ApiProperty({
    required: false,
    type: () => ContactCreateNestedManyWithoutPermissionGroupsInput,
  })
  @ValidateNested()
  @Type(() => ContactCreateNestedManyWithoutPermissionGroupsInput)
  @IsOptional()
  @Field(() => ContactCreateNestedManyWithoutPermissionGroupsInput, {
    nullable: true,
  })
  contacts?: ContactCreateNestedManyWithoutPermissionGroupsInput;

  @ApiProperty({
    required: false,
    type: () => FileDatumCreateNestedManyWithoutPermissionGroupsInput,
  })
  @ValidateNested()
  @Type(() => FileDatumCreateNestedManyWithoutPermissionGroupsInput)
  @IsOptional()
  @Field(() => FileDatumCreateNestedManyWithoutPermissionGroupsInput, {
    nullable: true,
  })
  fileData?: FileDatumCreateNestedManyWithoutPermissionGroupsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  files?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  gallery?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  groupName?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  location?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput)
  @IsOptional()
  @Field(
    () => PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput,
    {
      nullable: true,
    }
  )
  permissionGroupNames?: PermissionGroupNameCreateNestedManyWithoutPermissionGroupsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  status?: boolean | null;
}
export { PermissionGroupCreateInput };