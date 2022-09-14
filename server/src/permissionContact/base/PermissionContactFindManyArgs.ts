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
import { PermissionContactWhereInput } from "./PermissionContactWhereInput";
import { Type } from "class-transformer";
import { PermissionContactOrderByInput } from "./PermissionContactOrderByInput";

@ArgsType()
class PermissionContactFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PermissionContactWhereInput,
  })
  @Field(() => PermissionContactWhereInput, { nullable: true })
  @Type(() => PermissionContactWhereInput)
  where?: PermissionContactWhereInput;

  @ApiProperty({
    required: false,
    type: [PermissionContactOrderByInput],
  })
  @Field(() => [PermissionContactOrderByInput], { nullable: true })
  @Type(() => PermissionContactOrderByInput)
  orderBy?: Array<PermissionContactOrderByInput>;

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

export { PermissionContactFindManyArgs };