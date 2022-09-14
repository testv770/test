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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { LINKDATUM_TITLE_FIELD } from "../linkDatum/LinkDatumTitle";
import { ENUMREQUESTDATUM_TITLE_FIELD } from "./EnumRequestDatumTitle";

export const EnumRequestDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RequestDatum"
          target="EnumRequestDatumId"
          label="requestData"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="askId" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="categoryRequestId"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <ReferenceField
              label="fileId"
              source="filedatum.id"
              reference="FileDatum"
            >
              <TextField source={FILEDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="linkId"
              source="linkdatum.id"
              reference="LinkDatum"
            >
              <TextField source={LINKDATUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="recipientId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="statusId"
              source="enumrequestdatum.id"
              reference="EnumRequestDatum"
            >
              <TextField source={ENUMREQUESTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
