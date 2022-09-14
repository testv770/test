import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isBlockId?: SortOrder;
  isRegistered?: SortOrder;
  keyReadFirebase?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
