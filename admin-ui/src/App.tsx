import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GroupTemplateList } from "./groupTemplate/GroupTemplateList";
import { GroupTemplateCreate } from "./groupTemplate/GroupTemplateCreate";
import { GroupTemplateEdit } from "./groupTemplate/GroupTemplateEdit";
import { GroupTemplateShow } from "./groupTemplate/GroupTemplateShow";
import { CategoryTemplateList } from "./categoryTemplate/CategoryTemplateList";
import { CategoryTemplateCreate } from "./categoryTemplate/CategoryTemplateCreate";
import { CategoryTemplateEdit } from "./categoryTemplate/CategoryTemplateEdit";
import { CategoryTemplateShow } from "./categoryTemplate/CategoryTemplateShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { GroupMemberList } from "./groupMember/GroupMemberList";
import { GroupMemberCreate } from "./groupMember/GroupMemberCreate";
import { GroupMemberEdit } from "./groupMember/GroupMemberEdit";
import { GroupMemberShow } from "./groupMember/GroupMemberShow";
import { SharingUnregisteredUserList } from "./sharingUnregisteredUser/SharingUnregisteredUserList";
import { SharingUnregisteredUserCreate } from "./sharingUnregisteredUser/SharingUnregisteredUserCreate";
import { SharingUnregisteredUserEdit } from "./sharingUnregisteredUser/SharingUnregisteredUserEdit";
import { SharingUnregisteredUserShow } from "./sharingUnregisteredUser/SharingUnregisteredUserShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { RequestDatumList } from "./requestDatum/RequestDatumList";
import { RequestDatumCreate } from "./requestDatum/RequestDatumCreate";
import { RequestDatumEdit } from "./requestDatum/RequestDatumEdit";
import { RequestDatumShow } from "./requestDatum/RequestDatumShow";
import { EnumSuggestionDatumList } from "./enumSuggestionDatum/EnumSuggestionDatumList";
import { EnumSuggestionDatumCreate } from "./enumSuggestionDatum/EnumSuggestionDatumCreate";
import { EnumSuggestionDatumEdit } from "./enumSuggestionDatum/EnumSuggestionDatumEdit";
import { EnumSuggestionDatumShow } from "./enumSuggestionDatum/EnumSuggestionDatumShow";
import { EnumRequestDatumList } from "./enumRequestDatum/EnumRequestDatumList";
import { EnumRequestDatumCreate } from "./enumRequestDatum/EnumRequestDatumCreate";
import { EnumRequestDatumEdit } from "./enumRequestDatum/EnumRequestDatumEdit";
import { EnumRequestDatumShow } from "./enumRequestDatum/EnumRequestDatumShow";
import { EnumUserBlockList } from "./enumUserBlock/EnumUserBlockList";
import { EnumUserBlockCreate } from "./enumUserBlock/EnumUserBlockCreate";
import { EnumUserBlockEdit } from "./enumUserBlock/EnumUserBlockEdit";
import { EnumUserBlockShow } from "./enumUserBlock/EnumUserBlockShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { LinkDatumList } from "./linkDatum/LinkDatumList";
import { LinkDatumCreate } from "./linkDatum/LinkDatumCreate";
import { LinkDatumEdit } from "./linkDatum/LinkDatumEdit";
import { LinkDatumShow } from "./linkDatum/LinkDatumShow";
import { FileDatumList } from "./fileDatum/FileDatumList";
import { FileDatumCreate } from "./fileDatum/FileDatumCreate";
import { FileDatumEdit } from "./fileDatum/FileDatumEdit";
import { FileDatumShow } from "./fileDatum/FileDatumShow";
import { UserLocationList } from "./userLocation/UserLocationList";
import { UserLocationCreate } from "./userLocation/UserLocationCreate";
import { UserLocationEdit } from "./userLocation/UserLocationEdit";
import { UserLocationShow } from "./userLocation/UserLocationShow";
import { UserFcmList } from "./userFcm/UserFcmList";
import { UserFcmCreate } from "./userFcm/UserFcmCreate";
import { UserFcmEdit } from "./userFcm/UserFcmEdit";
import { UserFcmShow } from "./userFcm/UserFcmShow";
import { SuggestionDatumList } from "./suggestionDatum/SuggestionDatumList";
import { SuggestionDatumCreate } from "./suggestionDatum/SuggestionDatumCreate";
import { SuggestionDatumEdit } from "./suggestionDatum/SuggestionDatumEdit";
import { SuggestionDatumShow } from "./suggestionDatum/SuggestionDatumShow";
import { FileViewList } from "./fileView/FileViewList";
import { FileViewCreate } from "./fileView/FileViewCreate";
import { FileViewEdit } from "./fileView/FileViewEdit";
import { FileViewShow } from "./fileView/FileViewShow";
import { FileViewSettingList } from "./fileViewSetting/FileViewSettingList";
import { FileViewSettingCreate } from "./fileViewSetting/FileViewSettingCreate";
import { FileViewSettingEdit } from "./fileViewSetting/FileViewSettingEdit";
import { FileViewSettingShow } from "./fileViewSetting/FileViewSettingShow";
import { EnumFileViewSettingList } from "./enumFileViewSetting/EnumFileViewSettingList";
import { EnumFileViewSettingCreate } from "./enumFileViewSetting/EnumFileViewSettingCreate";
import { EnumFileViewSettingEdit } from "./enumFileViewSetting/EnumFileViewSettingEdit";
import { EnumFileViewSettingShow } from "./enumFileViewSetting/EnumFileViewSettingShow";
import { AuditList } from "./audit/AuditList";
import { AuditCreate } from "./audit/AuditCreate";
import { AuditEdit } from "./audit/AuditEdit";
import { AuditShow } from "./audit/AuditShow";
import { PermissionGroupList } from "./permissionGroup/PermissionGroupList";
import { PermissionGroupCreate } from "./permissionGroup/PermissionGroupCreate";
import { PermissionGroupEdit } from "./permissionGroup/PermissionGroupEdit";
import { PermissionGroupShow } from "./permissionGroup/PermissionGroupShow";
import { PermissionContactList } from "./permissionContact/PermissionContactList";
import { PermissionContactCreate } from "./permissionContact/PermissionContactCreate";
import { PermissionContactEdit } from "./permissionContact/PermissionContactEdit";
import { PermissionContactShow } from "./permissionContact/PermissionContactShow";
import { PermissionGroupNameList } from "./permissionGroupName/PermissionGroupNameList";
import { PermissionGroupNameCreate } from "./permissionGroupName/PermissionGroupNameCreate";
import { PermissionGroupNameEdit } from "./permissionGroupName/PermissionGroupNameEdit";
import { PermissionGroupNameShow } from "./permissionGroupName/PermissionGroupNameShow";
import { ShareIdentityList } from "./shareIdentity/ShareIdentityList";
import { ShareIdentityCreate } from "./shareIdentity/ShareIdentityCreate";
import { ShareIdentityEdit } from "./shareIdentity/ShareIdentityEdit";
import { ShareIdentityShow } from "./shareIdentity/ShareIdentityShow";
import { NetworkPostList } from "./networkPost/NetworkPostList";
import { NetworkPostCreate } from "./networkPost/NetworkPostCreate";
import { NetworkPostEdit } from "./networkPost/NetworkPostEdit";
import { NetworkPostShow } from "./networkPost/NetworkPostShow";
import { HashtagList } from "./hashtag/HashtagList";
import { HashtagCreate } from "./hashtag/HashtagCreate";
import { HashtagEdit } from "./hashtag/HashtagEdit";
import { HashtagShow } from "./hashtag/HashtagShow";
import { HashtagFileList } from "./hashtagFile/HashtagFileList";
import { HashtagFileCreate } from "./hashtagFile/HashtagFileCreate";
import { HashtagFileEdit } from "./hashtagFile/HashtagFileEdit";
import { HashtagFileShow } from "./hashtagFile/HashtagFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="GroupTemplate"
          list={GroupTemplateList}
          edit={GroupTemplateEdit}
          create={GroupTemplateCreate}
          show={GroupTemplateShow}
        />
        <Resource
          name="CategoryTemplate"
          list={CategoryTemplateList}
          edit={CategoryTemplateEdit}
          create={CategoryTemplateCreate}
          show={CategoryTemplateShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="GroupMember"
          list={GroupMemberList}
          edit={GroupMemberEdit}
          create={GroupMemberCreate}
          show={GroupMemberShow}
        />
        <Resource
          name="SharingUnregisteredUser"
          list={SharingUnregisteredUserList}
          edit={SharingUnregisteredUserEdit}
          create={SharingUnregisteredUserCreate}
          show={SharingUnregisteredUserShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="RequestDatum"
          list={RequestDatumList}
          edit={RequestDatumEdit}
          create={RequestDatumCreate}
          show={RequestDatumShow}
        />
        <Resource
          name="EnumSuggestionDatum"
          list={EnumSuggestionDatumList}
          edit={EnumSuggestionDatumEdit}
          create={EnumSuggestionDatumCreate}
          show={EnumSuggestionDatumShow}
        />
        <Resource
          name="EnumRequestDatum"
          list={EnumRequestDatumList}
          edit={EnumRequestDatumEdit}
          create={EnumRequestDatumCreate}
          show={EnumRequestDatumShow}
        />
        <Resource
          name="EnumUserBlock"
          list={EnumUserBlockList}
          edit={EnumUserBlockEdit}
          create={EnumUserBlockCreate}
          show={EnumUserBlockShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="LinkDatum"
          list={LinkDatumList}
          edit={LinkDatumEdit}
          create={LinkDatumCreate}
          show={LinkDatumShow}
        />
        <Resource
          name="FileDatum"
          list={FileDatumList}
          edit={FileDatumEdit}
          create={FileDatumCreate}
          show={FileDatumShow}
        />
        <Resource
          name="UserLocation"
          list={UserLocationList}
          edit={UserLocationEdit}
          create={UserLocationCreate}
          show={UserLocationShow}
        />
        <Resource
          name="UserFcm"
          list={UserFcmList}
          edit={UserFcmEdit}
          create={UserFcmCreate}
          show={UserFcmShow}
        />
        <Resource
          name="SuggestionDatum"
          list={SuggestionDatumList}
          edit={SuggestionDatumEdit}
          create={SuggestionDatumCreate}
          show={SuggestionDatumShow}
        />
        <Resource
          name="FileView"
          list={FileViewList}
          edit={FileViewEdit}
          create={FileViewCreate}
          show={FileViewShow}
        />
        <Resource
          name="FileViewSetting"
          list={FileViewSettingList}
          edit={FileViewSettingEdit}
          create={FileViewSettingCreate}
          show={FileViewSettingShow}
        />
        <Resource
          name="EnumFileViewSetting"
          list={EnumFileViewSettingList}
          edit={EnumFileViewSettingEdit}
          create={EnumFileViewSettingCreate}
          show={EnumFileViewSettingShow}
        />
        <Resource
          name="Audit"
          list={AuditList}
          edit={AuditEdit}
          create={AuditCreate}
          show={AuditShow}
        />
        <Resource
          name="PermissionGroup"
          list={PermissionGroupList}
          edit={PermissionGroupEdit}
          create={PermissionGroupCreate}
          show={PermissionGroupShow}
        />
        <Resource
          name="PermissionContact"
          list={PermissionContactList}
          edit={PermissionContactEdit}
          create={PermissionContactCreate}
          show={PermissionContactShow}
        />
        <Resource
          name="PermissionGroupName"
          list={PermissionGroupNameList}
          edit={PermissionGroupNameEdit}
          create={PermissionGroupNameCreate}
          show={PermissionGroupNameShow}
        />
        <Resource
          name="ShareIdentity"
          list={ShareIdentityList}
          edit={ShareIdentityEdit}
          create={ShareIdentityCreate}
          show={ShareIdentityShow}
        />
        <Resource
          name="NetworkPost"
          list={NetworkPostList}
          edit={NetworkPostEdit}
          create={NetworkPostCreate}
          show={NetworkPostShow}
        />
        <Resource
          name="Hashtag"
          list={HashtagList}
          edit={HashtagEdit}
          create={HashtagCreate}
          show={HashtagShow}
        />
        <Resource
          name="HashtagFile"
          list={HashtagFileList}
          edit={HashtagFileEdit}
          create={HashtagFileCreate}
          show={HashtagFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
