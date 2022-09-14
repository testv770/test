import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SuggestionDatumServiceBase } from "./base/suggestionDatum.service.base";

@Injectable()
export class SuggestionDatumService extends SuggestionDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
