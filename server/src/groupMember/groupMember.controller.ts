import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroupMemberService } from "./groupMember.service";
import { GroupMemberControllerBase } from "./base/groupMember.controller.base";

@swagger.ApiTags("groupMembers")
@common.Controller("groupMembers")
export class GroupMemberController extends GroupMemberControllerBase {
  constructor(
    protected readonly service: GroupMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
