import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  room?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
