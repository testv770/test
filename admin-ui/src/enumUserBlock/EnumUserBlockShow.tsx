import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { ENUMUSERBLOCK_TITLE_FIELD } from "./EnumUserBlockTitle";

export const EnumUserBlockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="EnumUserBlockId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <ReferenceField
              label="isBlock"
              source="enumuserblock.id"
              reference="EnumUserBlock"
            >
              <TextField source={ENUMUSERBLOCK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="isRegistered" source="isRegistered" />
            <TextField label="keyReadFirebase" source="keyReadFirebase" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="phone" source="phone" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
