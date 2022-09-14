/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ContactUpdateManyWithoutUsersInput {
  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  connect?: Array<ContactWhereUniqueInput>;

  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  disconnect?: Array<ContactWhereUniqueInput>;

  @Field(() => [ContactWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContactWhereUniqueInput],
  })
  set?: Array<ContactWhereUniqueInput>;
}
export { ContactUpdateManyWithoutUsersInput };
