import { Module } from "@nestjs/common";
import { PermissionContactModuleBase } from "./base/permissionContact.module.base";
import { PermissionContactService } from "./permissionContact.service";
import { PermissionContactController } from "./permissionContact.controller";
import { PermissionContactResolver } from "./permissionContact.resolver";

@Module({
  imports: [PermissionContactModuleBase],
  controllers: [PermissionContactController],
  providers: [PermissionContactService, PermissionContactResolver],
  exports: [PermissionContactService],
})
export class PermissionContactModule {}
