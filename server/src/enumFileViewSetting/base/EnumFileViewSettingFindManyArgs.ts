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
import { EnumFileViewSettingWhereInput } from "./EnumFileViewSettingWhereInput";
import { Type } from "class-transformer";
import { EnumFileViewSettingOrderByInput } from "./EnumFileViewSettingOrderByInput";

@ArgsType()
class EnumFileViewSettingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnumFileViewSettingWhereInput,
  })
  @Field(() => EnumFileViewSettingWhereInput, { nullable: true })
  @Type(() => EnumFileViewSettingWhereInput)
  where?: EnumFileViewSettingWhereInput;

  @ApiProperty({
    required: false,
    type: [EnumFileViewSettingOrderByInput],
  })
  @Field(() => [EnumFileViewSettingOrderByInput], { nullable: true })
  @Type(() => EnumFileViewSettingOrderByInput)
  orderBy?: Array<EnumFileViewSettingOrderByInput>;

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

export { EnumFileViewSettingFindManyArgs };
