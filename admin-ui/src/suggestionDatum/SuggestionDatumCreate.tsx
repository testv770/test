import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";
import { EnumSuggestionDatumTitle } from "../enumSuggestionDatum/EnumSuggestionDatumTitle";

export const SuggestionDatumCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categorySuggestionId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="duration" source="duration" />
        <ReferenceInput source="user.id" reference="User" label="recipientId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="enumsuggestiondatum.id"
          reference="EnumSuggestionDatum"
          label="statusId"
        >
          <SelectInput optionText={EnumSuggestionDatumTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="suggestionId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
