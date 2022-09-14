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
import { GroupWhereUniqueInput } from "../../group/base/GroupWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";
@InputType()
class GroupTemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => GroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupWhereUniqueInput)
  @IsOptional()
  @Field(() => GroupWhereUniqueInput, {
    nullable: true,
  })
  groupId?: GroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => TemplateWhereUniqueInput, {
    nullable: true,
  })
  templateId?: TemplateWhereUniqueInput | null;
}
export { GroupTemplateCreateInput };
