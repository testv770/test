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
import { GroupMemberWhereInput } from "./GroupMemberWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GroupMemberListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GroupMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberWhereInput)
  @IsOptional()
  @Field(() => GroupMemberWhereInput, {
    nullable: true,
  })
  every?: GroupMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberWhereInput)
  @IsOptional()
  @Field(() => GroupMemberWhereInput, {
    nullable: true,
  })
  some?: GroupMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberWhereInput)
  @IsOptional()
  @Field(() => GroupMemberWhereInput, {
    nullable: true,
  })
  none?: GroupMemberWhereInput;
}
export { GroupMemberListRelationFilter };