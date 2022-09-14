import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FileViewSettingService } from "./fileViewSetting.service";
import { FileViewSettingControllerBase } from "./base/fileViewSetting.controller.base";

@swagger.ApiTags("fileViewSettings")
@common.Controller("fileViewSettings")
export class FileViewSettingController extends FileViewSettingControllerBase {
  constructor(
    protected readonly service: FileViewSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
