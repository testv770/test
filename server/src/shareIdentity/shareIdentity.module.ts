import { Module } from "@nestjs/common";
import { ShareIdentityModuleBase } from "./base/shareIdentity.module.base";
import { ShareIdentityService } from "./shareIdentity.service";
import { ShareIdentityController } from "./shareIdentity.controller";
import { ShareIdentityResolver } from "./shareIdentity.resolver";

@Module({
  imports: [ShareIdentityModuleBase],
  controllers: [ShareIdentityController],
  providers: [ShareIdentityService, ShareIdentityResolver],
  exports: [ShareIdentityService],
})
export class ShareIdentityModule {}
