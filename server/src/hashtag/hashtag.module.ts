import { Module } from "@nestjs/common";
import { HashtagModuleBase } from "./base/hashtag.module.base";
import { HashtagService } from "./hashtag.service";
import { HashtagController } from "./hashtag.controller";
import { HashtagResolver } from "./hashtag.resolver";

@Module({
  imports: [HashtagModuleBase],
  controllers: [HashtagController],
  providers: [HashtagService, HashtagResolver],
  exports: [HashtagService],
})
export class HashtagModule {}
