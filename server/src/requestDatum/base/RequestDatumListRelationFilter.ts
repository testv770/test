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
import { RequestDatumWhereInput } from "./RequestDatumWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RequestDatumListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RequestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumWhereInput)
  @IsOptional()
  @Field(() => RequestDatumWhereInput, {
    nullable: true,
  })
  every?: RequestDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumWhereInput)
  @IsOptional()
  @Field(() => RequestDatumWhereInput, {
    nullable: true,
  })
  some?: RequestDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestDatumWhereInput)
  @IsOptional()
  @Field(() => RequestDatumWhereInput, {
    nullable: true,
  })
  none?: RequestDatumWhereInput;
}
export { RequestDatumListRelationFilter };
