import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HashtagFileResolverBase } from "./base/hashtagFile.resolver.base";
import { HashtagFile } from "./base/HashtagFile";
import { HashtagFileService } from "./hashtagFile.service";

@graphql.Resolver(() => HashtagFile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HashtagFileResolver extends HashtagFileResolverBase {
  constructor(
    protected readonly service: HashtagFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
