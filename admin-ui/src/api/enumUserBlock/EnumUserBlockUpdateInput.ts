import { UserUpdateManyWithoutEnumUserBlocksInput } from "./UserUpdateManyWithoutEnumUserBlocksInput";

export type EnumUserBlockUpdateInput = {
  status?: "block" | "frozen" | "active" | null;
  users?: UserUpdateManyWithoutEnumUserBlocksInput;
};
