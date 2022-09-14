import { CategoryTemplate } from "../categoryTemplate/CategoryTemplate";
import { FileDatum } from "../fileDatum/FileDatum";
import { LinkDatum } from "../linkDatum/LinkDatum";
import { Profile } from "../profile/Profile";
import { RequestDatum } from "../requestDatum/RequestDatum";
import { SuggestionDatum } from "../suggestionDatum/SuggestionDatum";

export type Category = {
  categoryName: string | null;
  categoryTemplates?: Array<CategoryTemplate>;
  createdAt: Date;
  fileData?: Array<FileDatum>;
  id: string;
  linkData?: Array<LinkDatum>;
  profiles?: Array<Profile>;
  requestData?: Array<RequestDatum>;
  suggestionData?: Array<SuggestionDatum>;
  updatedAt: Date;
};
