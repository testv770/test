/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileUpdateInput } from "./ProfileUpdateInput";

@ArgsType()
class UpdateProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
  @Field(() => ProfileUpdateInput, { nullable: false })
  data!: ProfileUpdateInput;
}

export { UpdateProfileArgs };
