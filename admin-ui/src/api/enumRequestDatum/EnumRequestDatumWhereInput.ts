import { StringFilter } from "../../util/StringFilter";
import { RequestDatumListRelationFilter } from "../requestDatum/RequestDatumListRelationFilter";

export type EnumRequestDatumWhereInput = {
  id?: StringFilter;
  requestData?: RequestDatumListRelationFilter;
  status?: "requested" | "approved" | "Canceled" | "rejected";
};
