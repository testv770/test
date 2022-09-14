import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryTemplateService } from "./categoryTemplate.service";
import { CategoryTemplateControllerBase } from "./base/categoryTemplate.controller.base";

@swagger.ApiTags("categoryTemplates")
@common.Controller("categoryTemplates")
export class CategoryTemplateController extends CategoryTemplateControllerBase {
  constructor(
    protected readonly service: CategoryTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
