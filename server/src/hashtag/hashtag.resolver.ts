import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HashtagResolverBase } from "./base/hashtag.resolver.base";
import { Hashtag } from "./base/Hashtag";
import { HashtagService } from "./hashtag.service";

@graphql.Resolver(() => Hashtag)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HashtagResolver extends HashtagResolverBase {
  constructor(
    protected readonly service: HashtagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
