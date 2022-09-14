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
import { CreateSharingUnregisteredUserArgs } from "./CreateSharingUnregisteredUserArgs";
import { UpdateSharingUnregisteredUserArgs } from "./UpdateSharingUnregisteredUserArgs";
import { DeleteSharingUnregisteredUserArgs } from "./DeleteSharingUnregisteredUserArgs";
import { SharingUnregisteredUserFindManyArgs } from "./SharingUnregisteredUserFindManyArgs";
import { SharingUnregisteredUserFindUniqueArgs } from "./SharingUnregisteredUserFindUniqueArgs";
import { SharingUnregisteredUser } from "./SharingUnregisteredUser";
import { User } from "../../user/base/User";
import { SharingUnregisteredUserService } from "../sharingUnregisteredUser.service";

@graphql.Resolver(() => SharingUnregisteredUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SharingUnregisteredUserResolverBase {
  constructor(
    protected readonly service: SharingUnregisteredUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "read",
    possession: "any",
  })
  async _sharingUnregisteredUsersMeta(
    @graphql.Args() args: SharingUnregisteredUserFindManyArgs
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
  @graphql.Query(() => [SharingUnregisteredUser])
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "read",
    possession: "any",
  })
  async sharingUnregisteredUsers(
    @graphql.Args() args: SharingUnregisteredUserFindManyArgs
  ): Promise<SharingUnregisteredUser[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SharingUnregisteredUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "read",
    possession: "own",
  })
  async sharingUnregisteredUser(
    @graphql.Args() args: SharingUnregisteredUserFindUniqueArgs
  ): Promise<SharingUnregisteredUser | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SharingUnregisteredUser)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "create",
    possession: "any",
  })
  async createSharingUnregisteredUser(
    @graphql.Args() args: CreateSharingUnregisteredUserArgs
  ): Promise<SharingUnregisteredUser> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        sharingId: args.data.sharingId
          ? {
              connect: args.data.sharingId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SharingUnregisteredUser)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "update",
    possession: "any",
  })
  async updateSharingUnregisteredUser(
    @graphql.Args() args: UpdateSharingUnregisteredUserArgs
  ): Promise<SharingUnregisteredUser | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          sharingId: args.data.sharingId
            ? {
                connect: args.data.sharingId,
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

  @graphql.Mutation(() => SharingUnregisteredUser)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "delete",
    possession: "any",
  })
  async deleteSharingUnregisteredUser(
    @graphql.Args() args: DeleteSharingUnregisteredUserArgs
  ): Promise<SharingUnregisteredUser | null> {
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
  async sharingId(
    @graphql.Parent() parent: SharingUnregisteredUser
  ): Promise<User | null> {
    const result = await this.service.getSharingId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
