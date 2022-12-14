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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumEnumSuggestionDatumStatus } from "./EnumEnumSuggestionDatumStatus";
import { SuggestionDatumListRelationFilter } from "../../suggestionDatum/base/SuggestionDatumListRelationFilter";
@InputType()
class EnumSuggestionDatumWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumEnumSuggestionDatumStatus,
  })
  @IsEnum(EnumEnumSuggestionDatumStatus)
  @IsOptional()
  @Field(() => EnumEnumSuggestionDatumStatus, {
    nullable: true,
  })
  status?: "suggested" | "approved" | "canceled" | "rejected";

  @ApiProperty({
    required: false,
    type: () => SuggestionDatumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SuggestionDatumListRelationFilter)
  @IsOptional()
  @Field(() => SuggestionDatumListRelationFilter, {
    nullable: true,
  })
  suggestionData?: SuggestionDatumListRelationFilter;
}
export { EnumSuggestionDatumWhereInput };
