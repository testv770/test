import { Module } from "@nestjs/common";
import { EnumFileViewSettingModuleBase } from "./base/enumFileViewSetting.module.base";
import { EnumFileViewSettingService } from "./enumFileViewSetting.service";
import { EnumFileViewSettingController } from "./enumFileViewSetting.controller";
import { EnumFileViewSettingResolver } from "./enumFileViewSetting.resolver";

@Module({
  imports: [EnumFileViewSettingModuleBase],
  controllers: [EnumFileViewSettingController],
  providers: [EnumFileViewSettingService, EnumFileViewSettingResolver],
  exports: [EnumFileViewSettingService],
})
export class EnumFileViewSettingModule {}
