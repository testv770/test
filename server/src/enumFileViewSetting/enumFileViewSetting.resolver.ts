import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumFileViewSettingResolverBase } from "./base/enumFileViewSetting.resolver.base";
import { EnumFileViewSetting } from "./base/EnumFileViewSetting";
import { EnumFileViewSettingService } from "./enumFileViewSetting.service";

@graphql.Resolver(() => EnumFileViewSetting)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumFileViewSettingResolver extends EnumFileViewSettingResolverBase {
  constructor(
    protected readonly service: EnumFileViewSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
