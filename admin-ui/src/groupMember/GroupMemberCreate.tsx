import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";
import { UserTitle } from "../user/UserTitle";

export const GroupMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="groupId">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="memberId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
