import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { GroupTemplateModule } from "./groupTemplate/groupTemplate.module";
import { CategoryTemplateModule } from "./categoryTemplate/categoryTemplate.module";
import { TemplateModule } from "./template/template.module";
import { ProfileModule } from "./profile/profile.module";
import { ContactModule } from "./contact/contact.module";
import { GroupMemberModule } from "./groupMember/groupMember.module";
import { SharingUnregisteredUserModule } from "./sharingUnregisteredUser/sharingUnregisteredUser.module";
import { GroupModule } from "./group/group.module";
import { RequestDatumModule } from "./requestDatum/requestDatum.module";
import { EnumSuggestionDatumModule } from "./enumSuggestionDatum/enumSuggestionDatum.module";
import { EnumRequestDatumModule } from "./enumRequestDatum/enumRequestDatum.module";
import { EnumUserBlockModule } from "./enumUserBlock/enumUserBlock.module";
import { CategoryModule } from "./category/category.module";
import { LinkDatumModule } from "./linkDatum/linkDatum.module";
import { FileDatumModule } from "./fileDatum/fileDatum.module";
import { UserLocationModule } from "./userLocation/userLocation.module";
import { UserFcmModule } from "./userFcm/userFcm.module";
import { SuggestionDatumModule } from "./suggestionDatum/suggestionDatum.module";
import { FileViewModule } from "./fileView/fileView.module";
import { FileViewSettingModule } from "./fileViewSetting/fileViewSetting.module";
import { EnumFileViewSettingModule } from "./enumFileViewSetting/enumFileViewSetting.module";
import { AuditModule } from "./audit/audit.module";
import { PermissionGroupModule } from "./permissionGroup/permissionGroup.module";
import { PermissionContactModule } from "./permissionContact/permissionContact.module";
import { PermissionGroupNameModule } from "./permissionGroupName/permissionGroupName.module";
import { ShareIdentityModule } from "./shareIdentity/shareIdentity.module";
import { NetworkPostModule } from "./networkPost/networkPost.module";
import { HashtagModule } from "./hashtag/hashtag.module";
import { HashtagFileModule } from "./hashtagFile/hashtagFile.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    GroupTemplateModule,
    CategoryTemplateModule,
    TemplateModule,
    ProfileModule,
    ContactModule,
    GroupMemberModule,
    SharingUnregisteredUserModule,
    GroupModule,
    RequestDatumModule,
    EnumSuggestionDatumModule,
    EnumRequestDatumModule,
    EnumUserBlockModule,
    CategoryModule,
    LinkDatumModule,
    FileDatumModule,
    UserLocationModule,
    UserFcmModule,
    SuggestionDatumModule,
    FileViewModule,
    FileViewSettingModule,
    EnumFileViewSettingModule,
    AuditModule,
    PermissionGroupModule,
    PermissionContactModule,
    PermissionGroupNameModule,
    ShareIdentityModule,
    NetworkPostModule,
    HashtagModule,
    HashtagFileModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
