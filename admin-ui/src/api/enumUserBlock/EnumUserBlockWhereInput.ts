import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EnumUserBlockWhereInput = {
  id?: StringFilter;
  status?: "block" | "frozen" | "active";
  users?: UserListRelationFilter;
};
