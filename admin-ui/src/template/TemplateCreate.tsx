import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CategoryTemplateTitle } from "../categoryTemplate/CategoryTemplateTitle";
import { GroupTemplateTitle } from "../groupTemplate/GroupTemplateTitle";
import { UserTitle } from "../user/UserTitle";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoryTemplates"
          reference="CategoryTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="groupTemplates"
          reference="GroupTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="ownerId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="templateName" source="templateName" />
      </SimpleForm>
    </Create>
  );
};
