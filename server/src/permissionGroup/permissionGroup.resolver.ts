import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PermissionGroupResolverBase } from "./base/permissionGroup.resolver.base";
import { PermissionGroup } from "./base/PermissionGroup";
import { PermissionGroupService } from "./permissionGroup.service";

@graphql.Resolver(() => PermissionGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionGroupResolver extends PermissionGroupResolverBase {
  constructor(
    protected readonly service: PermissionGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
