import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EnumUserBlockServiceBase } from "./base/enumUserBlock.service.base";

@Injectable()
export class EnumUserBlockService extends EnumUserBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
