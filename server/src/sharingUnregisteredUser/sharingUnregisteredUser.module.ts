import { Module } from "@nestjs/common";
import { SharingUnregisteredUserModuleBase } from "./base/sharingUnregisteredUser.module.base";
import { SharingUnregisteredUserService } from "./sharingUnregisteredUser.service";
import { SharingUnregisteredUserController } from "./sharingUnregisteredUser.controller";
import { SharingUnregisteredUserResolver } from "./sharingUnregisteredUser.resolver";

@Module({
  imports: [SharingUnregisteredUserModuleBase],
  controllers: [SharingUnregisteredUserController],
  providers: [SharingUnregisteredUserService, SharingUnregisteredUserResolver],
  exports: [SharingUnregisteredUserService],
})
export class SharingUnregisteredUserModule {}
