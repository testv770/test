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
import { Category } from "../../category/base/Category";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
@ObjectType()
class LinkDatum {
  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  categoryId?: Category | null;

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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPublic!: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link!: string | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  ownerId?: User | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { LinkDatum };
