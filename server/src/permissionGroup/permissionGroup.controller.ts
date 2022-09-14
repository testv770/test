import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionGroupService } from "./permissionGroup.service";
import { PermissionGroupControllerBase } from "./base/permissionGroup.controller.base";

@swagger.ApiTags("permissionGroups")
@common.Controller("permissionGroups")
export class PermissionGroupController extends PermissionGroupControllerBase {
  constructor(
    protected readonly service: PermissionGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
