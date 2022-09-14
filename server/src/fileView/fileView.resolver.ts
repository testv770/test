import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FileViewResolverBase } from "./base/fileView.resolver.base";
import { FileView } from "./base/FileView";
import { FileViewService } from "./fileView.service";

@graphql.Resolver(() => FileView)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FileViewResolver extends FileViewResolverBase {
  constructor(
    protected readonly service: FileViewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
