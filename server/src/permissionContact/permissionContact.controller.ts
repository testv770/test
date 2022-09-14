import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PermissionContactService } from "./permissionContact.service";
import { PermissionContactControllerBase } from "./base/permissionContact.controller.base";

@swagger.ApiTags("permissionContacts")
@common.Controller("permissionContacts")
export class PermissionContactController extends PermissionContactControllerBase {
  constructor(
    protected readonly service: PermissionContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
