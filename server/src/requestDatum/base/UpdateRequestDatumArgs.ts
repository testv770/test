/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { RequestDatumWhereUniqueInput } from "./RequestDatumWhereUniqueInput";
import { RequestDatumUpdateInput } from "./RequestDatumUpdateInput";

@ArgsType()
class UpdateRequestDatumArgs {
  @Field(() => RequestDatumWhereUniqueInput, { nullable: false })
  where!: RequestDatumWhereUniqueInput;
  @Field(() => RequestDatumUpdateInput, { nullable: false })
  data!: RequestDatumUpdateInput;
}

export { UpdateRequestDatumArgs };
