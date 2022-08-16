import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  Date?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  room?: IntNullableFilter;
};
