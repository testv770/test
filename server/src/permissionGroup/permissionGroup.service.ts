import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PermissionGroupServiceBase } from "./base/permissionGroup.service.base";

@Injectable()
export class PermissionGroupService extends PermissionGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
