import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShareIdentityService } from "./shareIdentity.service";
import { ShareIdentityControllerBase } from "./base/shareIdentity.controller.base";

@swagger.ApiTags("shareIdentities")
@common.Controller("shareIdentities")
export class ShareIdentityController extends ShareIdentityControllerBase {
  constructor(
    protected readonly service: ShareIdentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
