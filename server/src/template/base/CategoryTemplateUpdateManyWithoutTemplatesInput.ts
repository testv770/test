/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CategoryTemplateWhereUniqueInput } from "../../categoryTemplate/base/CategoryTemplateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CategoryTemplateUpdateManyWithoutTemplatesInput {
  @Field(() => [CategoryTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryTemplateWhereUniqueInput],
  })
  connect?: Array<CategoryTemplateWhereUniqueInput>;

  @Field(() => [CategoryTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryTemplateWhereUniqueInput],
  })
  disconnect?: Array<CategoryTemplateWhereUniqueInput>;

  @Field(() => [CategoryTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryTemplateWhereUniqueInput],
  })
  set?: Array<CategoryTemplateWhereUniqueInput>;
}
export { CategoryTemplateUpdateManyWithoutTemplatesInput };
