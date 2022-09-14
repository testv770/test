import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumUserBlockService } from "./enumUserBlock.service";
import { EnumUserBlockControllerBase } from "./base/enumUserBlock.controller.base";

@swagger.ApiTags("enumUserBlocks")
@common.Controller("enumUserBlocks")
export class EnumUserBlockController extends EnumUserBlockControllerBase {
  constructor(
    protected readonly service: EnumUserBlockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
