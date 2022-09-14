import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CategoryTemplateResolverBase } from "./base/categoryTemplate.resolver.base";
import { CategoryTemplate } from "./base/CategoryTemplate";
import { CategoryTemplateService } from "./categoryTemplate.service";

@graphql.Resolver(() => CategoryTemplate)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryTemplateResolver extends CategoryTemplateResolverBase {
  constructor(
    protected readonly service: CategoryTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
