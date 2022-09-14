import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SuggestionDatumTitle } from "../suggestionDatum/SuggestionDatumTitle";

export const EnumSuggestionDatumEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "suggested", value: "suggested" },
            { label: "approved", value: "approved" },
            { label: "canceled", value: "canceled" },
            { label: "rejected", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="suggestionData"
          reference="SuggestionDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionDatumTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
