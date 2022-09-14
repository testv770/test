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
import { EnumUserBlockWhereInput } from "./EnumUserBlockWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnumUserBlockListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EnumUserBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => EnumUserBlockWhereInput)
  @IsOptional()
  @Field(() => EnumUserBlockWhereInput, {
    nullable: true,
  })
  every?: EnumUserBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnumUserBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => EnumUserBlockWhereInput)
  @IsOptional()
  @Field(() => EnumUserBlockWhereInput, {
    nullable: true,
  })
  some?: EnumUserBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnumUserBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => EnumUserBlockWhereInput)
  @IsOptional()
  @Field(() => EnumUserBlockWhereInput, {
    nullable: true,
  })
  none?: EnumUserBlockWhereInput;
}
export { EnumUserBlockListRelationFilter };