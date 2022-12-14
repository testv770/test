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
import { CategoryTemplateCreateNestedManyWithoutTemplatesInput } from "./CategoryTemplateCreateNestedManyWithoutTemplatesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { GroupTemplateCreateNestedManyWithoutTemplatesInput } from "./GroupTemplateCreateNestedManyWithoutTemplatesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class TemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryTemplateCreateNestedManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => CategoryTemplateCreateNestedManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => CategoryTemplateCreateNestedManyWithoutTemplatesInput, {
    nullable: true,
  })
  categoryTemplates?: CategoryTemplateCreateNestedManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: () => GroupTemplateCreateNestedManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => GroupTemplateCreateNestedManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => GroupTemplateCreateNestedManyWithoutTemplatesInput, {
    nullable: true,
  })
  groupTemplates?: GroupTemplateCreateNestedManyWithoutTemplatesInput;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  templateName?: string | null;
}
export { TemplateCreateInput };
