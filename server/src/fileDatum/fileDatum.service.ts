import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FileDatumServiceBase } from "./base/fileDatum.service.base";

@Injectable()
export class FileDatumService extends FileDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
