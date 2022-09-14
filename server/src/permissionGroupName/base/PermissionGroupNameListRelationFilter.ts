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
import { PermissionGroupNameWhereInput } from "./PermissionGroupNameWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PermissionGroupNameListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameWhereInput)
  @IsOptional()
  @Field(() => PermissionGroupNameWhereInput, {
    nullable: true,
  })
  every?: PermissionGroupNameWhereInput;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameWhereInput)
  @IsOptional()
  @Field(() => PermissionGroupNameWhereInput, {
    nullable: true,
  })
  some?: PermissionGroupNameWhereInput;

  @ApiProperty({
    required: false,
    type: () => PermissionGroupNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PermissionGroupNameWhereInput)
  @IsOptional()
  @Field(() => PermissionGroupNameWhereInput, {
    nullable: true,
  })
  none?: PermissionGroupNameWhereInput;
}
export { PermissionGroupNameListRelationFilter };