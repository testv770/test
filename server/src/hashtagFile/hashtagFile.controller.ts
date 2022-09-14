import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HashtagFileService } from "./hashtagFile.service";
import { HashtagFileControllerBase } from "./base/hashtagFile.controller.base";

@swagger.ApiTags("hashtagFiles")
@common.Controller("hashtagFiles")
export class HashtagFileController extends HashtagFileControllerBase {
  constructor(
    protected readonly service: HashtagFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
