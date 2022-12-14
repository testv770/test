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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CategoryTemplateCreateNestedManyWithoutCategoriesInput } from "./CategoryTemplateCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";
import { FileDatumCreateNestedManyWithoutCategoriesInput } from "./FileDatumCreateNestedManyWithoutCategoriesInput";
import { LinkDatumCreateNestedManyWithoutCategoriesInput } from "./LinkDatumCreateNestedManyWithoutCategoriesInput";
import { ProfileCreateNestedManyWithoutCategoriesInput } from "./ProfileCreateNestedManyWithoutCategoriesInput";
import { RequestDatumCreateNestedManyWithoutCategoriesInput } from "./RequestDatumCreateNestedManyWithoutCategoriesInput";
import { SuggestionDatumCreateNestedManyWithoutCategoriesInput } from "./SuggestionDatumCreateNestedManyWithoutCategoriesInput";
@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  categoryName?: string | null;

  @ApiProperty({
    required: false,
    type: () => CategoryTemplateCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => CategoryTemplateCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => CategoryTemplateCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  categoryTemplates?: CategoryTemplateCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => FileDatumCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => FileDatumCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => FileDatumCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  fileData?: FileDatumCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => LinkDatumCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => LinkDatumCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => LinkDatumCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  linkData?: LinkDatumCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => ProfileCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ProfileCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ProfileCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  profiles?: ProfileCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => RequestDatumCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => RequestDatumCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  requestData?: RequestDatumCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => SuggestionDatumCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  suggestionData?: SuggestionDatumCreateNestedManyWithoutCategoriesInput;
}
export { CategoryCreateInput };
