import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";
import { EnumSuggestionDatumTitle } from "../enumSuggestionDatum/EnumSuggestionDatumTitle";

export const SuggestionDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
