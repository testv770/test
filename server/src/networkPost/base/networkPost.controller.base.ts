/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NetworkPostService } from "../networkPost.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NetworkPostCreateInput } from "./NetworkPostCreateInput";
import { NetworkPostWhereInput } from "./NetworkPostWhereInput";
import { NetworkPostWhereUniqueInput } from "./NetworkPostWhereUniqueInput";
import { NetworkPostFindManyArgs } from "./NetworkPostFindManyArgs";
import { NetworkPostUpdateInput } from "./NetworkPostUpdateInput";
import { NetworkPost } from "./NetworkPost";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NetworkPostControllerBase {
  constructor(
    protected readonly service: NetworkPostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "NetworkPost",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NetworkPost })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: NetworkPostCreateInput
  ): Promise<NetworkPost> {
    return await this.service.create({
      data: {
        ...data,

        identityId: {
          connect: data.identityId,
        },
      },
      select: {
        createdAt: true,
        datePublished: true,
        gif: true,
        id: true,

        identityId: {
          select: {
            id: true,
          },
        },

        image: true,
        networkType: true,
        postId: true,
        postText: true,
        updatedAt: true,
        video: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "NetworkPost",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [NetworkPost] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(NetworkPostFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<NetworkPost[]> {
    const args = plainToClass(NetworkPostFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        datePublished: true,
        gif: true,
        id: true,

        identityId: {
          select: {
            id: true,
          },
        },

        image: true,
        networkType: true,
        postId: true,
        postText: true,
        updatedAt: true,
        video: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "NetworkPost",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NetworkPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: NetworkPostWhereUniqueInput
  ): Promise<NetworkPost | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        datePublished: true,
        gif: true,
        id: true,

        identityId: {
          select: {
            id: true,
          },
        },

        image: true,
        networkType: true,
        postId: true,
        postText: true,
        updatedAt: true,
        video: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "NetworkPost",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: NetworkPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: NetworkPostWhereUniqueInput,
    @common.Body() data: NetworkPostUpdateInput
  ): Promise<NetworkPost | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          identityId: {
            connect: data.identityId,
          },
        },
        select: {
          createdAt: true,
          datePublished: true,
          gif: true,
          id: true,

          identityId: {
            select: {
              id: true,
            },
          },

          image: true,
          networkType: true,
          postId: true,
          postText: true,
          updatedAt: true,
          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "NetworkPost",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: NetworkPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: NetworkPostWhereUniqueInput
  ): Promise<NetworkPost | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          datePublished: true,
          gif: true,
          id: true,

          identityId: {
            select: {
              id: true,
            },
          },

          image: true,
          networkType: true,
          postId: true,
          postText: true,
          updatedAt: true,
          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}