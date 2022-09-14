import { Module } from "@nestjs/common";
import { FileViewModuleBase } from "./base/fileView.module.base";
import { FileViewService } from "./fileView.service";
import { FileViewController } from "./fileView.controller";
import { FileViewResolver } from "./fileView.resolver";

@Module({
  imports: [FileViewModuleBase],
  controllers: [FileViewController],
  providers: [FileViewService, FileViewResolver],
  exports: [FileViewService],
})
export class FileViewModule {}
