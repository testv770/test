import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ENUMSUGGESTIONDATUM_TITLE_FIELD } from "../enumSuggestionDatum/EnumSuggestionDatumTitle";

export const SuggestionDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"suggestionData"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="recipientId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="statusId"
          source="enumsuggestiondatum.id"
          reference="EnumSuggestionDatum"
        >
          <TextField source={ENUMSUGGESTIONDATUM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="suggestionId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
