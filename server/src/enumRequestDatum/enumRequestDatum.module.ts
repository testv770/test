import { Module } from "@nestjs/common";
import { EnumRequestDatumModuleBase } from "./base/enumRequestDatum.module.base";
import { EnumRequestDatumService } from "./enumRequestDatum.service";
import { EnumRequestDatumController } from "./enumRequestDatum.controller";
import { EnumRequestDatumResolver } from "./enumRequestDatum.resolver";

@Module({
  imports: [EnumRequestDatumModuleBase],
  controllers: [EnumRequestDatumController],
  providers: [EnumRequestDatumService, EnumRequestDatumResolver],
  exports: [EnumRequestDatumService],
})
export class EnumRequestDatumModule {}
