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
import { EnumEnumSuggestionDatumStatus } from "./EnumEnumSuggestionDatumStatus";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput } from "./SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput";
import { Type } from "class-transformer";
@InputType()
class EnumSuggestionDatumUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumEnumSuggestionDatumStatus,
  })
  @IsEnum(EnumEnumSuggestionDatumStatus)
  @IsOptional()
  @Field(() => EnumEnumSuggestionDatumStatus, {
    nullable: true,
  })
  status?: "suggested" | "approved" | "canceled" | "rejected" | null;

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput)
  @IsOptional()
  @Field(() => SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput, {
    nullable: true,
  })
  suggestionData?: SuggestionDatumUpdateManyWithoutEnumSuggestionDataInput;
}
export { EnumSuggestionDatumUpdateInput };
