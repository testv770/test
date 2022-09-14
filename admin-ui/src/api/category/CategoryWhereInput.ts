import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryTemplateListRelationFilter } from "../categoryTemplate/CategoryTemplateListRelationFilter";
import { FileDatumListRelationFilter } from "../fileDatum/FileDatumListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkDatumListRelationFilter } from "../linkDatum/LinkDatumListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { RequestDatumListRelationFilter } from "../requestDatum/RequestDatumListRelationFilter";
import { SuggestionDatumListRelationFilter } from "../suggestionDatum/SuggestionDatumListRelationFilter";

export type CategoryWhereInput = {
  categoryName?: StringNullableFilter;
  categoryTemplates?: CategoryTemplateListRelationFilter;
  fileData?: FileDatumListRelationFilter;
  id?: StringFilter;
  linkData?: LinkDatumListRelationFilter;
  profiles?: ProfileListRelationFilter;
  requestData?: RequestDatumListRelationFilter;
  suggestionData?: SuggestionDatumListRelationFilter;
};
