/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GroupTemplateWhereUniqueInput } from "../../groupTemplate/base/GroupTemplateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class GroupTemplateUpdateManyWithoutGroupsInput {
  @Field(() => [GroupTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GroupTemplateWhereUniqueInput],
  })
  connect?: Array<GroupTemplateWhereUniqueInput>;

  @Field(() => [GroupTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GroupTemplateWhereUniqueInput],
  })
  disconnect?: Array<GroupTemplateWhereUniqueInput>;

  @Field(() => [GroupTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GroupTemplateWhereUniqueInput],
  })
  set?: Array<GroupTemplateWhereUniqueInput>;
}
export { GroupTemplateUpdateManyWithoutGroupsInput };
