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
import { GroupMemberCreateNestedManyWithoutGroupsInput } from "./GroupMemberCreateNestedManyWithoutGroupsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { GroupTemplateCreateNestedManyWithoutGroupsInput } from "./GroupTemplateCreateNestedManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class GroupCreateInput {
  @ApiProperty({
    required: false,
    type: () => GroupMemberCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => GroupMemberCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => GroupMemberCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  groupMembers?: GroupMemberCreateNestedManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  groupname?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupTemplateCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => GroupTemplateCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => GroupTemplateCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  groupTemplates?: GroupTemplateCreateNestedManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDefaultGroup?: boolean | null;

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
}
export { GroupCreateInput };