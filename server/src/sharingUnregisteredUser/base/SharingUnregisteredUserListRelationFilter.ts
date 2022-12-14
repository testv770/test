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
import { SharingUnregisteredUserWhereInput } from "./SharingUnregisteredUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SharingUnregisteredUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SharingUnregisteredUserWhereInput,
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUserWhereInput)
  @IsOptional()
  @Field(() => SharingUnregisteredUserWhereInput, {
    nullable: true,
  })
  every?: SharingUnregisteredUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => SharingUnregisteredUserWhereInput,
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUserWhereInput)
  @IsOptional()
  @Field(() => SharingUnregisteredUserWhereInput, {
    nullable: true,
  })
  some?: SharingUnregisteredUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => SharingUnregisteredUserWhereInput,
  })
  @ValidateNested()
  @Type(() => SharingUnregisteredUserWhereInput)
  @IsOptional()
  @Field(() => SharingUnregisteredUserWhereInput, {
    nullable: true,
  })
  none?: SharingUnregisteredUserWhereInput;
}
export { SharingUnregisteredUserListRelationFilter };
