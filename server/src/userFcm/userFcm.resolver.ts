import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserFcmResolverBase } from "./base/userFcm.resolver.base";
import { UserFcm } from "./base/UserFcm";
import { UserFcmService } from "./userFcm.service";

@graphql.Resolver(() => UserFcm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserFcmResolver extends UserFcmResolverBase {
  constructor(
    protected readonly service: UserFcmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
