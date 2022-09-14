import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumFileViewSettingService } from "./enumFileViewSetting.service";
import { EnumFileViewSettingControllerBase } from "./base/enumFileViewSetting.controller.base";

@swagger.ApiTags("enumFileViewSettings")
@common.Controller("enumFileViewSettings")
export class EnumFileViewSettingController extends EnumFileViewSettingControllerBase {
  constructor(
    protected readonly service: EnumFileViewSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
