/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
import { EnumEnumRequestDatumStatus } from "./EnumEnumRequestDatumStatus";
@ObjectType()
class EnumRequestDatum {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [RequestDatum],
  })
  @ValidateNested()
  @Type(() => RequestDatum)
  @IsOptional()
  requestData?: Array<RequestDatum>;

  @ApiProperty({
    required: false,
    enum: EnumEnumRequestDatumStatus,
  })
  @IsEnum(EnumEnumRequestDatumStatus)
  @IsOptional()
  @Field(() => EnumEnumRequestDatumStatus, {
    nullable: true,
  })
  status?: "requested" | "approved" | "Canceled" | "rejected" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { EnumRequestDatum };
