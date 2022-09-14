import { Module } from "@nestjs/common";
import { FileDatumModuleBase } from "./base/fileDatum.module.base";
import { FileDatumService } from "./fileDatum.service";
import { FileDatumController } from "./fileDatum.controller";
import { FileDatumResolver } from "./fileDatum.resolver";

@Module({
  imports: [FileDatumModuleBase],
  controllers: [FileDatumController],
  providers: [FileDatumService, FileDatumResolver],
  exports: [FileDatumService],
})
export class FileDatumModule {}
