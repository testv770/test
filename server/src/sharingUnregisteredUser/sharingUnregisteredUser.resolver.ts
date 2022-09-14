import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SharingUnregisteredUserResolverBase } from "./base/sharingUnregisteredUser.resolver.base";
import { SharingUnregisteredUser } from "./base/SharingUnregisteredUser";
import { SharingUnregisteredUserService } from "./sharingUnregisteredUser.service";

@graphql.Resolver(() => SharingUnregisteredUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SharingUnregisteredUserResolver extends SharingUnregisteredUserResolverBase {
  constructor(
    protected readonly service: SharingUnregisteredUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
