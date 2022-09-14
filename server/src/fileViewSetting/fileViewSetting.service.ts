import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FileViewSettingServiceBase } from "./base/fileViewSetting.service.base";

@Injectable()
export class FileViewSettingService extends FileViewSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
