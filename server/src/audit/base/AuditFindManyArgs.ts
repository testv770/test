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
import { AuditWhereInput } from "./AuditWhereInput";
import { Type } from "class-transformer";
import { AuditOrderByInput } from "./AuditOrderByInput";

@ArgsType()
class AuditFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AuditWhereInput,
  })
  @Field(() => AuditWhereInput, { nullable: true })
  @Type(() => AuditWhereInput)
  where?: AuditWhereInput;

  @ApiProperty({
    required: false,
    type: [AuditOrderByInput],
  })
  @Field(() => [AuditOrderByInput], { nullable: true })
  @Type(() => AuditOrderByInput)
  orderBy?: Array<AuditOrderByInput>;

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

export { AuditFindManyArgs };