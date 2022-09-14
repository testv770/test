import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RequestDatumResolverBase } from "./base/requestDatum.resolver.base";
import { RequestDatum } from "./base/RequestDatum";
import { RequestDatumService } from "./requestDatum.service";

@graphql.Resolver(() => RequestDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RequestDatumResolver extends RequestDatumResolverBase {
  constructor(
    protected readonly service: RequestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
