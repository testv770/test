import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionGroupNameService } from "./permissionGroupName.service";
import { PermissionGroupNameControllerBase } from "./base/permissionGroupName.controller.base";

@swagger.ApiTags("permissionGroupNames")
@common.Controller("permissionGroupNames")
export class PermissionGroupNameController extends PermissionGroupNameControllerBase {
  constructor(
    protected readonly service: PermissionGroupNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
