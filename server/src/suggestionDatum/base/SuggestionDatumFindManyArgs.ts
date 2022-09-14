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
import { SuggestionDatumWhereInput } from "./SuggestionDatumWhereInput";
import { Type } from "class-transformer";
import { SuggestionDatumOrderByInput } from "./SuggestionDatumOrderByInput";

@ArgsType()
class SuggestionDatumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SuggestionDatumWhereInput,
  })
  @Field(() => SuggestionDatumWhereInput, { nullable: true })
  @Type(() => SuggestionDatumWhereInput)
  where?: SuggestionDatumWhereInput;

  @ApiProperty({
    required: false,
    type: [SuggestionDatumOrderByInput],
  })
  @Field(() => [SuggestionDatumOrderByInput], { nullable: true })
  @Type(() => SuggestionDatumOrderByInput)
  orderBy?: Array<SuggestionDatumOrderByInput>;

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

export { SuggestionDatumFindManyArgs };
