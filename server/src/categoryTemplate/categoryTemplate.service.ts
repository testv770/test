import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategoryTemplateServiceBase } from "./base/categoryTemplate.service.base";

@Injectable()
export class CategoryTemplateService extends CategoryTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
