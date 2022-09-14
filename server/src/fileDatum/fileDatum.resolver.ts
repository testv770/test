import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FileDatumResolverBase } from "./base/fileDatum.resolver.base";
import { FileDatum } from "./base/FileDatum";
import { FileDatumService } from "./fileDatum.service";

@graphql.Resolver(() => FileDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FileDatumResolver extends FileDatumResolverBase {
  constructor(
    protected readonly service: FileDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
