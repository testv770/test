import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PermissionGroupNameResolverBase } from "./base/permissionGroupName.resolver.base";
import { PermissionGroupName } from "./base/PermissionGroupName";
import { PermissionGroupNameService } from "./permissionGroupName.service";

@graphql.Resolver(() => PermissionGroupName)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionGroupNameResolver extends PermissionGroupNameResolverBase {
  constructor(
    protected readonly service: PermissionGroupNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
