import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const SupportTicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="room" source="room" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
