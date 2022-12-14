/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePermissionGroupArgs } from "./CreatePermissionGroupArgs";
import { UpdatePermissionGroupArgs } from "./UpdatePermissionGroupArgs";
import { DeletePermissionGroupArgs } from "./DeletePermissionGroupArgs";
import { PermissionGroupFindManyArgs } from "./PermissionGroupFindManyArgs";
import { PermissionGroupFindUniqueArgs } from "./PermissionGroupFindUniqueArgs";
import { PermissionGroup } from "./PermissionGroup";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { FileDatumFindManyArgs } from "../../fileDatum/base/FileDatumFindManyArgs";
import { FileDatum } from "../../fileDatum/base/FileDatum";
import { PermissionGroupNameFindManyArgs } from "../../permissionGroupName/base/PermissionGroupNameFindManyArgs";
import { PermissionGroupName } from "../../permissionGroupName/base/PermissionGroupName";
import { PermissionGroupService } from "../permissionGroup.service";

@graphql.Resolver(() => PermissionGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionGroupResolverBase {
  constructor(
    protected readonly service: PermissionGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "read",
    possession: "any",
  })
  async _permissionGroupsMeta(
    @graphql.Args() args: PermissionGroupFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PermissionGroup])
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "read",
    possession: "any",
  })
  async permissionGroups(
    @graphql.Args() args: PermissionGroupFindManyArgs
  ): Promise<PermissionGroup[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PermissionGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "read",
    possession: "own",
  })
  async permissionGroup(
    @graphql.Args() args: PermissionGroupFindUniqueArgs
  ): Promise<PermissionGroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PermissionGroup)
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "create",
    possession: "any",
  })
  async createPermissionGroup(
    @graphql.Args() args: CreatePermissionGroupArgs
  ): Promise<PermissionGroup> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PermissionGroup)
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "update",
    possession: "any",
  })
  async updatePermissionGroup(
    @graphql.Args() args: UpdatePermissionGroupArgs
  ): Promise<PermissionGroup | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PermissionGroup)
  @nestAccessControl.UseRoles({
    resource: "PermissionGroup",
    action: "delete",
    possession: "any",
  })
  async deletePermissionGroup(
    @graphql.Args() args: DeletePermissionGroupArgs
  ): Promise<PermissionGroup | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Contact])
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contacts(
    @graphql.Parent() parent: PermissionGroup,
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    const results = await this.service.findContacts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FileDatum])
  @nestAccessControl.UseRoles({
    resource: "FileDatum",
    action: "read",
    possession: "any",
  })
  async fileData(
    @graphql.Parent() parent: PermissionGroup,
    @graphql.Args() args: FileDatumFindManyArgs
  ): Promise<FileDatum[]> {
    const results = await this.service.findFileData(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PermissionGroupName])
  @nestAccessControl.UseRoles({
    resource: "PermissionGroupName",
    action: "read",
    possession: "any",
  })
  async permissionGroupNames(
    @graphql.Parent() parent: PermissionGroup,
    @graphql.Args() args: PermissionGroupNameFindManyArgs
  ): Promise<PermissionGroupName[]> {
    const results = await this.service.findPermissionGroupNames(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
