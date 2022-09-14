import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const GroupTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="groupId">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="templateId"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
