import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const CategoryTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
