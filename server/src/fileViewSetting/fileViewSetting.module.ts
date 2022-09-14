import { Module } from "@nestjs/common";
import { FileViewSettingModuleBase } from "./base/fileViewSetting.module.base";
import { FileViewSettingService } from "./fileViewSetting.service";
import { FileViewSettingController } from "./fileViewSetting.controller";
import { FileViewSettingResolver } from "./fileViewSetting.resolver";

@Module({
  imports: [FileViewSettingModuleBase],
  controllers: [FileViewSettingController],
  providers: [FileViewSettingService, FileViewSettingResolver],
  exports: [FileViewSettingService],
})
export class FileViewSettingModule {}
