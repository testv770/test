import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumUserBlockResolverBase } from "./base/enumUserBlock.resolver.base";
import { EnumUserBlock } from "./base/EnumUserBlock";
import { EnumUserBlockService } from "./enumUserBlock.service";

@graphql.Resolver(() => EnumUserBlock)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumUserBlockResolver extends EnumUserBlockResolverBase {
  constructor(
    protected readonly service: EnumUserBlockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
