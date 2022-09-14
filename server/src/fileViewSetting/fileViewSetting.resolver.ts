import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FileViewSettingResolverBase } from "./base/fileViewSetting.resolver.base";
import { FileViewSetting } from "./base/FileViewSetting";
import { FileViewSettingService } from "./fileViewSetting.service";

@graphql.Resolver(() => FileViewSetting)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FileViewSettingResolver extends FileViewSettingResolverBase {
  constructor(
    protected readonly service: FileViewSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
