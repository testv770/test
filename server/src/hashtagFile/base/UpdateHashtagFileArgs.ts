/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { HashtagFileWhereUniqueInput } from "./HashtagFileWhereUniqueInput";
import { HashtagFileUpdateInput } from "./HashtagFileUpdateInput";

@ArgsType()
class UpdateHashtagFileArgs {
  @Field(() => HashtagFileWhereUniqueInput, { nullable: false })
  where!: HashtagFileWhereUniqueInput;
  @Field(() => HashtagFileUpdateInput, { nullable: false })
  data!: HashtagFileUpdateInput;
}

export { UpdateHashtagFileArgs };
