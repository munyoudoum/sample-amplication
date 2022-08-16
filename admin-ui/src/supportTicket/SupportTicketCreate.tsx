import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const SupportTicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="room" source="room" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
