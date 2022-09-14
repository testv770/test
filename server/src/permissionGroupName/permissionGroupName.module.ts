import { Module } from "@nestjs/common";
import { PermissionGroupNameModuleBase } from "./base/permissionGroupName.module.base";
import { PermissionGroupNameService } from "./permissionGroupName.service";
import { PermissionGroupNameController } from "./permissionGroupName.controller";
import { PermissionGroupNameResolver } from "./permissionGroupName.resolver";

@Module({
  imports: [PermissionGroupNameModuleBase],
  controllers: [PermissionGroupNameController],
  providers: [PermissionGroupNameService, PermissionGroupNameResolver],
  exports: [PermissionGroupNameService],
})
export class PermissionGroupNameModule {}
