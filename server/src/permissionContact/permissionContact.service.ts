import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PermissionContactServiceBase } from "./base/permissionContact.service.base";

@Injectable()
export class PermissionContactService extends PermissionContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
