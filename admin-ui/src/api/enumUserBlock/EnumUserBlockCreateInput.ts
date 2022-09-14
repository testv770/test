import { UserCreateNestedManyWithoutEnumUserBlocksInput } from "./UserCreateNestedManyWithoutEnumUserBlocksInput";

export type EnumUserBlockCreateInput = {
  status?: "block" | "frozen" | "active" | null;
  users?: UserCreateNestedManyWithoutEnumUserBlocksInput;
};
