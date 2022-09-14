import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GroupTemplateServiceBase } from "./base/groupTemplate.service.base";

@Injectable()
export class GroupTemplateService extends GroupTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
