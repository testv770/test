import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NetworkPostResolverBase } from "./base/networkPost.resolver.base";
import { NetworkPost } from "./base/NetworkPost";
import { NetworkPostService } from "./networkPost.service";

@graphql.Resolver(() => NetworkPost)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NetworkPostResolver extends NetworkPostResolverBase {
  constructor(
    protected readonly service: NetworkPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
