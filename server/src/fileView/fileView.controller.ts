import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FileViewService } from "./fileView.service";
import { FileViewControllerBase } from "./base/fileView.controller.base";

@swagger.ApiTags("fileViews")
@common.Controller("fileViews")
export class FileViewController extends FileViewControllerBase {
  constructor(
    protected readonly service: FileViewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
