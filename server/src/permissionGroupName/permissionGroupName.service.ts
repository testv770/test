import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PermissionGroupNameServiceBase } from "./base/permissionGroupName.service.base";

@Injectable()
export class PermissionGroupNameService extends PermissionGroupNameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
