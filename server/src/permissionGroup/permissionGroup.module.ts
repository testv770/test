import { Module } from "@nestjs/common";
import { PermissionGroupModuleBase } from "./base/permissionGroup.module.base";
import { PermissionGroupService } from "./permissionGroup.service";
import { PermissionGroupController } from "./permissionGroup.controller";
import { PermissionGroupResolver } from "./permissionGroup.resolver";

@Module({
  imports: [PermissionGroupModuleBase],
  controllers: [PermissionGroupController],
  providers: [PermissionGroupService, PermissionGroupResolver],
  exports: [PermissionGroupService],
})
export class PermissionGroupModule {}
