import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkDatumService } from "./linkDatum.service";
import { LinkDatumControllerBase } from "./base/linkDatum.controller.base";

@swagger.ApiTags("linkData")
@common.Controller("linkData")
export class LinkDatumController extends LinkDatumControllerBase {
  constructor(
    protected readonly service: LinkDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
