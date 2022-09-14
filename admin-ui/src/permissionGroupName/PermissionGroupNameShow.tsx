import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PERMISSIONGROUP_TITLE_FIELD } from "../permissionGroup/PermissionGroupTitle";

export const PermissionGroupNameShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="groupName" source="groupName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="identityId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="permissionGroupId"
          source="permissiongroup.id"
          reference="PermissionGroup"
        >
          <TextField source={PERMISSIONGROUP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
