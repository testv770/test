import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const NetworkPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="datePublished" source="datePublished" />
        <TextField label="gif" source="gif" />
        <TextField label="ID" source="id" />
        <ReferenceField label="identityId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="image" source="image" />
        <TextField label="networkType" source="networkType" />
        <TextField label="postId" source="postId" />
        <TextField label="postText" source="postText" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video" source="video" />
      </SimpleShowLayout>
    </Show>
  );
};
