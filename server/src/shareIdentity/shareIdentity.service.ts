import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ShareIdentityServiceBase } from "./base/shareIdentity.service.base";

@Injectable()
export class ShareIdentityService extends ShareIdentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
