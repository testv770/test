import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GroupMemberResolverBase } from "./base/groupMember.resolver.base";
import { GroupMember } from "./base/GroupMember";
import { GroupMemberService } from "./groupMember.service";

@graphql.Resolver(() => GroupMember)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GroupMemberResolver extends GroupMemberResolverBase {
  constructor(
    protected readonly service: GroupMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
