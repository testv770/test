import { Module } from "@nestjs/common";
import { NetworkPostModuleBase } from "./base/networkPost.module.base";
import { NetworkPostService } from "./networkPost.service";
import { NetworkPostController } from "./networkPost.controller";
import { NetworkPostResolver } from "./networkPost.resolver";

@Module({
  imports: [NetworkPostModuleBase],
  controllers: [NetworkPostController],
  providers: [NetworkPostService, NetworkPostResolver],
  exports: [NetworkPostService],
})
export class NetworkPostModule {}
