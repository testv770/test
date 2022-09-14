import { Module } from "@nestjs/common";
import { RequestDatumModuleBase } from "./base/requestDatum.module.base";
import { RequestDatumService } from "./requestDatum.service";
import { RequestDatumController } from "./requestDatum.controller";
import { RequestDatumResolver } from "./requestDatum.resolver";

@Module({
  imports: [RequestDatumModuleBase],
  controllers: [RequestDatumController],
  providers: [RequestDatumService, RequestDatumResolver],
  exports: [RequestDatumService],
})
export class RequestDatumModule {}
