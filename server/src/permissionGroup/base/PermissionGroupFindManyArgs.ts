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
import { PermissionGroupWhereInput } from "./PermissionGroupWhereInput";
import { Type } from "class-transformer";
import { PermissionGroupOrderByInput } from "./PermissionGroupOrderByInput";

@ArgsType()
class PermissionGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PermissionGroupWhereInput,
  })
  @Field(() => PermissionGroupWhereInput, { nullable: true })
  @Type(() => PermissionGroupWhereInput)
  where?: PermissionGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [PermissionGroupOrderByInput],
  })
  @Field(() => [PermissionGroupOrderByInput], { nullable: true })
  @Type(() => PermissionGroupOrderByInput)
  orderBy?: Array<PermissionGroupOrderByInput>;

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

export { PermissionGroupFindManyArgs };
