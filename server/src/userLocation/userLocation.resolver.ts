import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserLocationResolverBase } from "./base/userLocation.resolver.base";
import { UserLocation } from "./base/UserLocation";
import { UserLocationService } from "./userLocation.service";

@graphql.Resolver(() => UserLocation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserLocationResolver extends UserLocationResolverBase {
  constructor(
    protected readonly service: UserLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
