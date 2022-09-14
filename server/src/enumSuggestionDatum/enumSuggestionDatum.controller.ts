import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumSuggestionDatumService } from "./enumSuggestionDatum.service";
import { EnumSuggestionDatumControllerBase } from "./base/enumSuggestionDatum.controller.base";

@swagger.ApiTags("enumSuggestionData")
@common.Controller("enumSuggestionData")
export class EnumSuggestionDatumController extends EnumSuggestionDatumControllerBase {
  constructor(
    protected readonly service: EnumSuggestionDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
