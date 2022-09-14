import { Module } from "@nestjs/common";
import { UserLocationModuleBase } from "./base/userLocation.module.base";
import { UserLocationService } from "./userLocation.service";
import { UserLocationController } from "./userLocation.controller";
import { UserLocationResolver } from "./userLocation.resolver";

@Module({
  imports: [UserLocationModuleBase],
  controllers: [UserLocationController],
  providers: [UserLocationService, UserLocationResolver],
  exports: [UserLocationService],
})
export class UserLocationModule {}
