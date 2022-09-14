import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ENUMSUGGESTIONDATUM_TITLE_FIELD } from "./EnumSuggestionDatumTitle";

export const EnumSuggestionDatumShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SuggestionDatum"
          target="EnumSuggestionDatumId"
          label="suggestionData"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categorySuggestionId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="recipientId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="statusId"
              source="enumsuggestiondatum.id"
              reference="EnumSuggestionDatum"
            >
              <TextField source={ENUMSUGGESTIONDATUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="suggestionId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
