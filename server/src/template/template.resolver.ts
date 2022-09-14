import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TemplateResolverBase } from "./base/template.resolver.base";
import { Template } from "./base/Template";
import { TemplateService } from "./template.service";

@graphql.Resolver(() => Template)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TemplateResolver extends TemplateResolverBase {
  constructor(
    protected readonly service: TemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
