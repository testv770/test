import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserFcmService } from "./userFcm.service";
import { UserFcmControllerBase } from "./base/userFcm.controller.base";

@swagger.ApiTags("userFcms")
@common.Controller("userFcms")
export class UserFcmController extends UserFcmControllerBase {
  constructor(
    protected readonly service: UserFcmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
