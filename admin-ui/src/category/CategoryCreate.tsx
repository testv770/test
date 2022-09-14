import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTemplateTitle } from "../categoryTemplate/CategoryTemplateTitle";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { LinkDatumTitle } from "../linkDatum/LinkDatumTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { RequestDatumTitle } from "../requestDatum/RequestDatumTitle";
import { SuggestionDatumTitle } from "../suggestionDatum/SuggestionDatumTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="categoryName" source="categoryName" />
        <ReferenceArrayInput
          source="categoryTemplates"
          reference="CategoryTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileData"
          reference="FileDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="linkData"
          reference="LinkDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="profiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestData"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suggestionData"
          reference="SuggestionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionDatumTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
