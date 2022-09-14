import { RequestDatumCreateNestedManyWithoutEnumRequestDataInput } from "./RequestDatumCreateNestedManyWithoutEnumRequestDataInput";

export type EnumRequestDatumCreateInput = {
  requestData?: RequestDatumCreateNestedManyWithoutEnumRequestDataInput;
  status?: "requested" | "approved" | "Canceled" | "rejected" | null;
};
