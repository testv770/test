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
import { CreateLinkDatumArgs } from "./CreateLinkDatumArgs";
import { UpdateLinkDatumArgs } from "./UpdateLinkDatumArgs";
import { DeleteLinkDatumArgs } from "./DeleteLinkDatumArgs";
import { LinkDatumFindManyArgs } from "./LinkDatumFindManyArgs";
import { LinkDatumFindUniqueArgs } from "./LinkDatumFindUniqueArgs";
import { LinkDatum } from "./LinkDatum";
import { RequestDatumFindManyArgs } from "../../requestDatum/base/RequestDatumFindManyArgs";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
import { Category } from "../../category/base/Category";
import { User } from "../../user/base/User";
import { LinkDatumService } from "../linkDatum.service";

@graphql.Resolver(() => LinkDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LinkDatumResolverBase {
  constructor(
    protected readonly service: LinkDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "read",
    possession: "any",
  })
  async _linkDataMeta(
    @graphql.Args() args: LinkDatumFindManyArgs
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
  @graphql.Query(() => [LinkDatum])
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "read",
    possession: "any",
  })
  async linkData(
    @graphql.Args() args: LinkDatumFindManyArgs
  ): Promise<LinkDatum[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LinkDatum, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "read",
    possession: "own",
  })
  async linkDatum(
    @graphql.Args() args: LinkDatumFindUniqueArgs
  ): Promise<LinkDatum | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LinkDatum)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "create",
    possession: "any",
  })
  async createLinkDatum(
    @graphql.Args() args: CreateLinkDatumArgs
  ): Promise<LinkDatum> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        categoryId: args.data.categoryId
          ? {
              connect: args.data.categoryId,
            }
          : undefined,

        ownerId: args.data.ownerId
          ? {
              connect: args.data.ownerId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LinkDatum)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "update",
    possession: "any",
  })
  async updateLinkDatum(
    @graphql.Args() args: UpdateLinkDatumArgs
  ): Promise<LinkDatum | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          categoryId: args.data.categoryId
            ? {
                connect: args.data.categoryId,
              }
            : undefined,

          ownerId: args.data.ownerId
            ? {
                connect: args.data.ownerId,
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

  @graphql.Mutation(() => LinkDatum)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "delete",
    possession: "any",
  })
  async deleteLinkDatum(
    @graphql.Args() args: DeleteLinkDatumArgs
  ): Promise<LinkDatum | null> {
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
  @graphql.ResolveField(() => [RequestDatum])
  @nestAccessControl.UseRoles({
    resource: "RequestDatum",
    action: "read",
    possession: "any",
  })
  async requestData(
    @graphql.Parent() parent: LinkDatum,
    @graphql.Args() args: RequestDatumFindManyArgs
  ): Promise<RequestDatum[]> {
    const results = await this.service.findRequestData(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categoryId(
    @graphql.Parent() parent: LinkDatum
  ): Promise<Category | null> {
    const result = await this.service.getCategoryId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async ownerId(@graphql.Parent() parent: LinkDatum): Promise<User | null> {
    const result = await this.service.getOwnerId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
