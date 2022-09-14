import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RequestDatumServiceBase } from "./base/requestDatum.service.base";

@Injectable()
export class RequestDatumService extends RequestDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
