import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserFcmServiceBase } from "./base/userFcm.service.base";

@Injectable()
export class UserFcmService extends UserFcmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
