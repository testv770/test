import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumSuggestionDatumResolverBase } from "./base/enumSuggestionDatum.resolver.base";
import { EnumSuggestionDatum } from "./base/EnumSuggestionDatum";
import { EnumSuggestionDatumService } from "./enumSuggestionDatum.service";

@graphql.Resolver(() => EnumSuggestionDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumSuggestionDatumResolver extends EnumSuggestionDatumResolverBase {
  constructor(
    protected readonly service: EnumSuggestionDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
