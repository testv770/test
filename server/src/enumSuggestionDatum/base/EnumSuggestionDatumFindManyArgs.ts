/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumSuggestionDatumWhereInput } from "./EnumSuggestionDatumWhereInput";
import { Type } from "class-transformer";
import { EnumSuggestionDatumOrderByInput } from "./EnumSuggestionDatumOrderByInput";

@ArgsType()
class EnumSuggestionDatumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnumSuggestionDatumWhereInput,
  })
  @Field(() => EnumSuggestionDatumWhereInput, { nullable: true })
  @Type(() => EnumSuggestionDatumWhereInput)
  where?: EnumSuggestionDatumWhereInput;

  @ApiProperty({
    required: false,
    type: [EnumSuggestionDatumOrderByInput],
  })
  @Field(() => [EnumSuggestionDatumOrderByInput], { nullable: true })
  @Type(() => EnumSuggestionDatumOrderByInput)
  orderBy?: Array<EnumSuggestionDatumOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EnumSuggestionDatumFindManyArgs };
