import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HashtagServiceBase } from "./base/hashtag.service.base";

@Injectable()
export class HashtagService extends HashtagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
