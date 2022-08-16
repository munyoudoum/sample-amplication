import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Date" source="Date" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone" source="phone" />
        <NumberInput step={1} label="Room" source="room" />
      </SimpleForm>
    </Edit>
  );
};
