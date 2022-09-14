import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EnumRequestDatumServiceBase } from "./base/enumRequestDatum.service.base";

@Injectable()
export class EnumRequestDatumService extends EnumRequestDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
