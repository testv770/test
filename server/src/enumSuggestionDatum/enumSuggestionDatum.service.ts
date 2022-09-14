import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EnumSuggestionDatumServiceBase } from "./base/enumSuggestionDatum.service.base";

@Injectable()
export class EnumSuggestionDatumService extends EnumSuggestionDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
