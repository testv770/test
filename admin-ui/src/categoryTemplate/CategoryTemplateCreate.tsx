import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const CategoryTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryId"
        >
          <SelectInput optionText={CategoryTitle} />
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
