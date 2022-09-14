import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { RequestDatumTitle } from "../requestDatum/RequestDatumTitle";

export const EnumRequestDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="requestData"
          reference="RequestDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestDatumTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "requested", value: "requested" },
            { label: "approved", value: "approved" },
            { label: "canceled", value: "Canceled" },
            { label: "rejected", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
