/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HashtagWhereUniqueInput } from "../../hashtag/base/HashtagWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class HashtagUpdateManyWithoutUsersInput {
  @Field(() => [HashtagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HashtagWhereUniqueInput],
  })
  connect?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HashtagWhereUniqueInput],
  })
  disconnect?: Array<HashtagWhereUniqueInput>;

  @Field(() => [HashtagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HashtagWhereUniqueInput],
  })
  set?: Array<HashtagWhereUniqueInput>;
}
export { HashtagUpdateManyWithoutUsersInput };
