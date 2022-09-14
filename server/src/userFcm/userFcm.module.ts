import { Module } from "@nestjs/common";
import { UserFcmModuleBase } from "./base/userFcm.module.base";
import { UserFcmService } from "./userFcm.service";
import { UserFcmController } from "./userFcm.controller";
import { UserFcmResolver } from "./userFcm.resolver";

@Module({
  imports: [UserFcmModuleBase],
  controllers: [UserFcmController],
  providers: [UserFcmService, UserFcmResolver],
  exports: [UserFcmService],
})
export class UserFcmModule {}
