import { RequestDatum } from "../requestDatum/RequestDatum";

export type EnumRequestDatum = {
  createdAt: Date;
  id: string;
  requestData?: Array<RequestDatum>;
  status?: "requested" | "approved" | "Canceled" | "rejected" | null;
  updatedAt: Date;
};
