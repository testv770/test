import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroupTemplateService } from "./groupTemplate.service";
import { GroupTemplateControllerBase } from "./base/groupTemplate.controller.base";

@swagger.ApiTags("groupTemplates")
@common.Controller("groupTemplates")
export class GroupTemplateController extends GroupTemplateControllerBase {
  constructor(
    protected readonly service: GroupTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
