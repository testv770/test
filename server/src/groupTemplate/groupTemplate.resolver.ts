import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GroupTemplateResolverBase } from "./base/groupTemplate.resolver.base";
import { GroupTemplate } from "./base/GroupTemplate";
import { GroupTemplateService } from "./groupTemplate.service";

@graphql.Resolver(() => GroupTemplate)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GroupTemplateResolver extends GroupTemplateResolverBase {
  constructor(
    protected readonly service: GroupTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
