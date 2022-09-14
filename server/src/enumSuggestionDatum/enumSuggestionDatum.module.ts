import { Module } from "@nestjs/common";
import { EnumSuggestionDatumModuleBase } from "./base/enumSuggestionDatum.module.base";
import { EnumSuggestionDatumService } from "./enumSuggestionDatum.service";
import { EnumSuggestionDatumController } from "./enumSuggestionDatum.controller";
import { EnumSuggestionDatumResolver } from "./enumSuggestionDatum.resolver";

@Module({
  imports: [EnumSuggestionDatumModuleBase],
  controllers: [EnumSuggestionDatumController],
  providers: [EnumSuggestionDatumService, EnumSuggestionDatumResolver],
  exports: [EnumSuggestionDatumService],
})
export class EnumSuggestionDatumModule {}
