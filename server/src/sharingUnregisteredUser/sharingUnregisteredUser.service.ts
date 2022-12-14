import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SharingUnregisteredUserServiceBase } from "./base/sharingUnregisteredUser.service.base";

@Injectable()
export class SharingUnregisteredUserService extends SharingUnregisteredUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
