import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RequestDatumService } from "./requestDatum.service";
import { RequestDatumControllerBase } from "./base/requestDatum.controller.base";

@swagger.ApiTags("requestData")
@common.Controller("requestData")
export class RequestDatumController extends RequestDatumControllerBase {
  constructor(
    protected readonly service: RequestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
