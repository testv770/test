import { RequestDatumUpdateManyWithoutEnumRequestDataInput } from "./RequestDatumUpdateManyWithoutEnumRequestDataInput";

export type EnumRequestDatumUpdateInput = {
  requestData?: RequestDatumUpdateManyWithoutEnumRequestDataInput;
  status?: "requested" | "approved" | "Canceled" | "rejected" | null;
};
