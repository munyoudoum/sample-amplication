import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupportTicketWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringFilter;
  id?: StringFilter;
  room?: StringNullableFilter;
  title?: StringFilter;
};
