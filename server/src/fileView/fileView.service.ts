import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FileViewServiceBase } from "./base/fileView.service.base";

@Injectable()
export class FileViewService extends FileViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
