import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumRequestDatumService } from "./enumRequestDatum.service";
import { EnumRequestDatumControllerBase } from "./base/enumRequestDatum.controller.base";

@swagger.ApiTags("enumRequestData")
@common.Controller("enumRequestData")
export class EnumRequestDatumController extends EnumRequestDatumControllerBase {
  constructor(
    protected readonly service: EnumRequestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
