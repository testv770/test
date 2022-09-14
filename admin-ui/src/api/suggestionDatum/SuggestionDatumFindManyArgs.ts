import { SuggestionDatumWhereInput } from "./SuggestionDatumWhereInput";
import { SuggestionDatumOrderByInput } from "./SuggestionDatumOrderByInput";

export type SuggestionDatumFindManyArgs = {
  where?: SuggestionDatumWhereInput;
  orderBy?: Array<SuggestionDatumOrderByInput>;
  skip?: number;
  take?: number;
};
