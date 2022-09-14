import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EnumFileViewSettingServiceBase } from "./base/enumFileViewSetting.service.base";

@Injectable()
export class EnumFileViewSettingService extends EnumFileViewSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
