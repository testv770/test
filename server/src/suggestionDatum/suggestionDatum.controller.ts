import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuggestionDatumService } from "./suggestionDatum.service";
import { SuggestionDatumControllerBase } from "./base/suggestionDatum.controller.base";

@swagger.ApiTags("suggestionData")
@common.Controller("suggestionData")
export class SuggestionDatumController extends SuggestionDatumControllerBase {
  constructor(
    protected readonly service: SuggestionDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
