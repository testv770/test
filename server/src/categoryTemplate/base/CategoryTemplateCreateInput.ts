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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";
@InputType()
class CategoryTemplateCreateInput {
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
  categoryId?: CategoryWhereUniqueInput | null;

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
export { CategoryTemplateCreateInput };
