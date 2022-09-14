import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { FileDatumTitle } from "../fileDatum/FileDatumTitle";
import { LinkDatumTitle } from "../linkDatum/LinkDatumTitle";
import { EnumRequestDatumTitle } from "../enumRequestDatum/EnumRequestDatumTitle";

export const RequestDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="askId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryRequestId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="duration" source="duration" />
        <ReferenceInput
          source="filedatum.id"
          reference="FileDatum"
          label="fileId"
        >
          <SelectInput optionText={FileDatumTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="linkdatum.id"
          reference="LinkDatum"
          label="linkId"
        >
          <SelectInput optionText={LinkDatumTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="recipientId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="enumrequestdatum.id"
          reference="EnumRequestDatum"
          label="statusId"
        >
          <SelectInput optionText={EnumRequestDatumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
