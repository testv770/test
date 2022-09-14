import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LinkDatumServiceBase } from "./base/linkDatum.service.base";

@Injectable()
export class LinkDatumService extends LinkDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
