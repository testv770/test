import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HashtagFileServiceBase } from "./base/hashtagFile.service.base";

@Injectable()
export class HashtagFileService extends HashtagFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
