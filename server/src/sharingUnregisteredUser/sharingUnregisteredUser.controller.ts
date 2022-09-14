import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SharingUnregisteredUserService } from "./sharingUnregisteredUser.service";
import { SharingUnregisteredUserControllerBase } from "./base/sharingUnregisteredUser.controller.base";

@swagger.ApiTags("sharingUnregisteredUsers")
@common.Controller("sharingUnregisteredUsers")
export class SharingUnregisteredUserController extends SharingUnregisteredUserControllerBase {
  constructor(
    protected readonly service: SharingUnregisteredUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
