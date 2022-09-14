import { Module } from "@nestjs/common";
import { EnumUserBlockModuleBase } from "./base/enumUserBlock.module.base";
import { EnumUserBlockService } from "./enumUserBlock.service";
import { EnumUserBlockController } from "./enumUserBlock.controller";
import { EnumUserBlockResolver } from "./enumUserBlock.resolver";

@Module({
  imports: [EnumUserBlockModuleBase],
  controllers: [EnumUserBlockController],
  providers: [EnumUserBlockService, EnumUserBlockResolver],
  exports: [EnumUserBlockService],
})
export class EnumUserBlockModule {}
