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
import { FileViewWhereInput } from "./FileViewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FileViewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FileViewWhereInput,
  })
  @ValidateNested()
  @Type(() => FileViewWhereInput)
  @IsOptional()
  @Field(() => FileViewWhereInput, {
    nullable: true,
  })
  every?: FileViewWhereInput;

  @ApiProperty({
    required: false,
    type: () => FileViewWhereInput,
  })
  @ValidateNested()
  @Type(() => FileViewWhereInput)
  @IsOptional()
  @Field(() => FileViewWhereInput, {
    nullable: true,
  })
  some?: FileViewWhereInput;

  @ApiProperty({
    required: false,
    type: () => FileViewWhereInput,
  })
  @ValidateNested()
  @Type(() => FileViewWhereInput)
  @IsOptional()
  @Field(() => FileViewWhereInput, {
    nullable: true,
  })
  none?: FileViewWhereInput;
}
export { FileViewListRelationFilter };
