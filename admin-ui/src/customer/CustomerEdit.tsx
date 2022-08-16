import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <DateInput label="Date" source="Date" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <NumberInput step={1} label="Room" source="room" />
      </SimpleForm>
    </Edit>
  );
};
