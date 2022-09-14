import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LinkDatumResolverBase } from "./base/linkDatum.resolver.base";
import { LinkDatum } from "./base/LinkDatum";
import { LinkDatumService } from "./linkDatum.service";

@graphql.Resolver(() => LinkDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LinkDatumResolver extends LinkDatumResolverBase {
  constructor(
    protected readonly service: LinkDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
