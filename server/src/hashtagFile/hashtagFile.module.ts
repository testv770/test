import { Module } from "@nestjs/common";
import { HashtagFileModuleBase } from "./base/hashtagFile.module.base";
import { HashtagFileService } from "./hashtagFile.service";
import { HashtagFileController } from "./hashtagFile.controller";
import { HashtagFileResolver } from "./hashtagFile.resolver";

@Module({
  imports: [HashtagFileModuleBase],
  controllers: [HashtagFileController],
  providers: [HashtagFileService, HashtagFileResolver],
  exports: [HashtagFileService],
})
export class HashtagFileModule {}
