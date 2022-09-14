import { Module } from "@nestjs/common";
import { LinkDatumModuleBase } from "./base/linkDatum.module.base";
import { LinkDatumService } from "./linkDatum.service";
import { LinkDatumController } from "./linkDatum.controller";
import { LinkDatumResolver } from "./linkDatum.resolver";

@Module({
  imports: [LinkDatumModuleBase],
  controllers: [LinkDatumController],
  providers: [LinkDatumService, LinkDatumResolver],
  exports: [LinkDatumService],
})
export class LinkDatumModule {}
