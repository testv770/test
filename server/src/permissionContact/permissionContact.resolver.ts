import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PermissionContactResolverBase } from "./base/permissionContact.resolver.base";
import { PermissionContact } from "./base/PermissionContact";
import { PermissionContactService } from "./permissionContact.service";

@graphql.Resolver(() => PermissionContact)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionContactResolver extends PermissionContactResolverBase {
  constructor(
    protected readonly service: PermissionContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
