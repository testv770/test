import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GroupMemberTitle } from "../groupMember/GroupMemberTitle";
import { GroupTemplateTitle } from "../groupTemplate/GroupTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const GroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="groupMembers"
          reference="GroupMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupMemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="groupname" source="groupname" />
        <ReferenceArrayInput
          source="groupTemplates"
          reference="GroupTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTemplateTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isDefaultGroup" source="isDefaultGroup" />
        <ReferenceInput source="user.id" reference="User" label="ownerId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
