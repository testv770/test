import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TemplateServiceBase } from "./base/template.service.base";

@Injectable()
export class TemplateService extends TemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
