import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumRequestDatumResolverBase } from "./base/enumRequestDatum.resolver.base";
import { EnumRequestDatum } from "./base/EnumRequestDatum";
import { EnumRequestDatumService } from "./enumRequestDatum.service";

@graphql.Resolver(() => EnumRequestDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumRequestDatumResolver extends EnumRequestDatumResolverBase {
  constructor(
    protected readonly service: EnumRequestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
