import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NetworkPostServiceBase } from "./base/networkPost.service.base";

@Injectable()
export class NetworkPostService extends NetworkPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
