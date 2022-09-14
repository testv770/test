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
import { HashtagFileWhereInput } from "./HashtagFileWhereInput";
import { Type } from "class-transformer";
import { HashtagFileOrderByInput } from "./HashtagFileOrderByInput";

@ArgsType()
class HashtagFileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HashtagFileWhereInput,
  })
  @Field(() => HashtagFileWhereInput, { nullable: true })
  @Type(() => HashtagFileWhereInput)
  where?: HashtagFileWhereInput;

  @ApiProperty({
    required: false,
    type: [HashtagFileOrderByInput],
  })
  @Field(() => [HashtagFileOrderByInput], { nullable: true })
  @Type(() => HashtagFileOrderByInput)
  orderBy?: Array<HashtagFileOrderByInput>;

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

export { HashtagFileFindManyArgs };
