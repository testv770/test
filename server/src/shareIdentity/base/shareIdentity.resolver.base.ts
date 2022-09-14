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
import { CreateShareIdentityArgs } from "./CreateShareIdentityArgs";
import { UpdateShareIdentityArgs } from "./UpdateShareIdentityArgs";
import { DeleteShareIdentityArgs } from "./DeleteShareIdentityArgs";
import { ShareIdentityFindManyArgs } from "./ShareIdentityFindManyArgs";
import { ShareIdentityFindUniqueArgs } from "./ShareIdentityFindUniqueArgs";
import { ShareIdentity } from "./ShareIdentity";
import { User } from "../../user/base/User";
import { ShareIdentityService } from "../shareIdentity.service";

@graphql.Resolver(() => ShareIdentity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShareIdentityResolverBase {
  constructor(
    protected readonly service: ShareIdentityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "read",
    possession: "any",
  })
  async _shareIdentitiesMeta(
    @graphql.Args() args: ShareIdentityFindManyArgs
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
  @graphql.Query(() => [ShareIdentity])
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "read",
    possession: "any",
  })
  async shareIdentities(
    @graphql.Args() args: ShareIdentityFindManyArgs
  ): Promise<ShareIdentity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ShareIdentity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "read",
    possession: "own",
  })
  async shareIdentity(
    @graphql.Args() args: ShareIdentityFindUniqueArgs
  ): Promise<ShareIdentity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ShareIdentity)
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "create",
    possession: "any",
  })
  async createShareIdentity(
    @graphql.Args() args: CreateShareIdentityArgs
  ): Promise<ShareIdentity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        identitySharedId: args.data.identitySharedId
          ? {
              connect: args.data.identitySharedId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ShareIdentity)
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "update",
    possession: "any",
  })
  async updateShareIdentity(
    @graphql.Args() args: UpdateShareIdentityArgs
  ): Promise<ShareIdentity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          identitySharedId: args.data.identitySharedId
            ? {
                connect: args.data.identitySharedId,
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

  @graphql.Mutation(() => ShareIdentity)
  @nestAccessControl.UseRoles({
    resource: "ShareIdentity",
    action: "delete",
    possession: "any",
  })
  async deleteShareIdentity(
    @graphql.Args() args: DeleteShareIdentityArgs
  ): Promise<ShareIdentity | null> {
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
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async identitySharedId(
    @graphql.Parent() parent: ShareIdentity
  ): Promise<User | null> {
    const result = await this.service.getIdentitySharedId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
