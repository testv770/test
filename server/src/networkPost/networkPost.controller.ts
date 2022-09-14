import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NetworkPostService } from "./networkPost.service";
import { NetworkPostControllerBase } from "./base/networkPost.controller.base";

@swagger.ApiTags("networkPosts")
@common.Controller("networkPosts")
export class NetworkPostController extends NetworkPostControllerBase {
  constructor(
    protected readonly service: NetworkPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
