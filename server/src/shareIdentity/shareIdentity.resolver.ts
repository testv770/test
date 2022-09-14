import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShareIdentityResolverBase } from "./base/shareIdentity.resolver.base";
import { ShareIdentity } from "./base/ShareIdentity";
import { ShareIdentityService } from "./shareIdentity.service";

@graphql.Resolver(() => ShareIdentity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShareIdentityResolver extends ShareIdentityResolverBase {
  constructor(
    protected readonly service: ShareIdentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
