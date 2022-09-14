import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SuggestionDatumResolverBase } from "./base/suggestionDatum.resolver.base";
import { SuggestionDatum } from "./base/SuggestionDatum";
import { SuggestionDatumService } from "./suggestionDatum.service";

@graphql.Resolver(() => SuggestionDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SuggestionDatumResolver extends SuggestionDatumResolverBase {
  constructor(
    protected readonly service: SuggestionDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
