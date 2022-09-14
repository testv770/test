import { Module } from "@nestjs/common";
import { CategoryTemplateModuleBase } from "./base/categoryTemplate.module.base";
import { CategoryTemplateService } from "./categoryTemplate.service";
import { CategoryTemplateController } from "./categoryTemplate.controller";
import { CategoryTemplateResolver } from "./categoryTemplate.resolver";

@Module({
  imports: [CategoryTemplateModuleBase],
  controllers: [CategoryTemplateController],
  providers: [CategoryTemplateService, CategoryTemplateResolver],
  exports: [CategoryTemplateService],
})
export class CategoryTemplateModule {}
