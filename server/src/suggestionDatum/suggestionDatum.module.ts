import { Module } from "@nestjs/common";
import { SuggestionDatumModuleBase } from "./base/suggestionDatum.module.base";
import { SuggestionDatumService } from "./suggestionDatum.service";
import { SuggestionDatumController } from "./suggestionDatum.controller";
import { SuggestionDatumResolver } from "./suggestionDatum.resolver";

@Module({
  imports: [SuggestionDatumModuleBase],
  controllers: [SuggestionDatumController],
  providers: [SuggestionDatumService, SuggestionDatumResolver],
  exports: [SuggestionDatumService],
})
export class SuggestionDatumModule {}
