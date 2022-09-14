import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const NetworkPostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"networkPosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
