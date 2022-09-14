import { Module } from "@nestjs/common";
import { GroupTemplateModuleBase } from "./base/groupTemplate.module.base";
import { GroupTemplateService } from "./groupTemplate.service";
import { GroupTemplateController } from "./groupTemplate.controller";
import { GroupTemplateResolver } from "./groupTemplate.resolver";

@Module({
  imports: [GroupTemplateModuleBase],
  controllers: [GroupTemplateController],
  providers: [GroupTemplateService, GroupTemplateResolver],
  exports: [GroupTemplateService],
})
export class GroupTemplateModule {}
