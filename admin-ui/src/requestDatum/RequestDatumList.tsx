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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { FILEDATUM_TITLE_FIELD } from "../fileDatum/FileDatumTitle";
import { LINKDATUM_TITLE_FIELD } from "../linkDatum/LinkDatumTitle";
import { ENUMREQUESTDATUM_TITLE_FIELD } from "../enumRequestDatum/EnumRequestDatumTitle";

export const RequestDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"requestData"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="recipientId" source="user.id" reference="User">
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
    </List>
  );
};
