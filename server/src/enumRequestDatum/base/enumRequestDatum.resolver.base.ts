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
import { CreateEnumRequestDatumArgs } from "./CreateEnumRequestDatumArgs";
import { UpdateEnumRequestDatumArgs } from "./UpdateEnumRequestDatumArgs";
import { DeleteEnumRequestDatumArgs } from "./DeleteEnumRequestDatumArgs";
import { EnumRequestDatumFindManyArgs } from "./EnumRequestDatumFindManyArgs";
import { EnumRequestDatumFindUniqueArgs } from "./EnumRequestDatumFindUniqueArgs";
import { EnumRequestDatum } from "./EnumRequestDatum";
import { RequestDatumFindManyArgs } from "../../requestDatum/base/RequestDatumFindManyArgs";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
import { EnumRequestDatumService } from "../enumRequestDatum.service";

@graphql.Resolver(() => EnumRequestDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumRequestDatumResolverBase {
  constructor(
    protected readonly service: EnumRequestDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "read",
    possession: "any",
  })
  async _enumRequestDataMeta(
    @graphql.Args() args: EnumRequestDatumFindManyArgs
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
  @graphql.Query(() => [EnumRequestDatum])
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "read",
    possession: "any",
  })
  async enumRequestData(
    @graphql.Args() args: EnumRequestDatumFindManyArgs
  ): Promise<EnumRequestDatum[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EnumRequestDatum, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "read",
    possession: "own",
  })
  async enumRequestDatum(
    @graphql.Args() args: EnumRequestDatumFindUniqueArgs
  ): Promise<EnumRequestDatum | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EnumRequestDatum)
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "create",
    possession: "any",
  })
  async createEnumRequestDatum(
    @graphql.Args() args: CreateEnumRequestDatumArgs
  ): Promise<EnumRequestDatum> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EnumRequestDatum)
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "update",
    possession: "any",
  })
  async updateEnumRequestDatum(
    @graphql.Args() args: UpdateEnumRequestDatumArgs
  ): Promise<EnumRequestDatum | null> {
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

  @graphql.Mutation(() => EnumRequestDatum)
  @nestAccessControl.UseRoles({
    resource: "EnumRequestDatum",
    action: "delete",
    possession: "any",
  })
  async deleteEnumRequestDatum(
    @graphql.Args() args: DeleteEnumRequestDatumArgs
  ): Promise<EnumRequestDatum | null> {
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
    @graphql.Parent() parent: EnumRequestDatum,
    @graphql.Args() args: RequestDatumFindManyArgs
  ): Promise<RequestDatum[]> {
    const results = await this.service.findRequestData(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
