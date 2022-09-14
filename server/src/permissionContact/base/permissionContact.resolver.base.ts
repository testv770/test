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
import { CreatePermissionContactArgs } from "./CreatePermissionContactArgs";
import { UpdatePermissionContactArgs } from "./UpdatePermissionContactArgs";
import { DeletePermissionContactArgs } from "./DeletePermissionContactArgs";
import { PermissionContactFindManyArgs } from "./PermissionContactFindManyArgs";
import { PermissionContactFindUniqueArgs } from "./PermissionContactFindUniqueArgs";
import { PermissionContact } from "./PermissionContact";
import { Contact } from "../../contact/base/Contact";
import { PermissionContactService } from "../permissionContact.service";

@graphql.Resolver(() => PermissionContact)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PermissionContactResolverBase {
  constructor(
    protected readonly service: PermissionContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "read",
    possession: "any",
  })
  async _permissionContactsMeta(
    @graphql.Args() args: PermissionContactFindManyArgs
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
  @graphql.Query(() => [PermissionContact])
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "read",
    possession: "any",
  })
  async permissionContacts(
    @graphql.Args() args: PermissionContactFindManyArgs
  ): Promise<PermissionContact[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PermissionContact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "read",
    possession: "own",
  })
  async permissionContact(
    @graphql.Args() args: PermissionContactFindUniqueArgs
  ): Promise<PermissionContact | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PermissionContact)
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "create",
    possession: "any",
  })
  async createPermissionContact(
    @graphql.Args() args: CreatePermissionContactArgs
  ): Promise<PermissionContact> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        contactRelationId: args.data.contactRelationId
          ? {
              connect: args.data.contactRelationId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PermissionContact)
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "update",
    possession: "any",
  })
  async updatePermissionContact(
    @graphql.Args() args: UpdatePermissionContactArgs
  ): Promise<PermissionContact | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          contactRelationId: args.data.contactRelationId
            ? {
                connect: args.data.contactRelationId,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => PermissionContact)
  @nestAccessControl.UseRoles({
    resource: "PermissionContact",
    action: "delete",
    possession: "any",
  })
  async deletePermissionContact(
    @graphql.Args() args: DeletePermissionContactArgs
  ): Promise<PermissionContact | null> {
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
  @graphql.ResolveField(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contactRelationId(
    @graphql.Parent() parent: PermissionContact
  ): Promise<Contact | null> {
    const result = await this.service.getContactRelationId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}