import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FileDatumService } from "./fileDatum.service";
import { FileDatumControllerBase } from "./base/fileDatum.controller.base";

@swagger.ApiTags("fileData")
@common.Controller("fileData")
export class FileDatumController extends FileDatumControllerBase {
  constructor(
    protected readonly service: FileDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
