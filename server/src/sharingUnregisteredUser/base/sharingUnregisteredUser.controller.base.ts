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
import { SharingUnregisteredUserService } from "../sharingUnregisteredUser.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SharingUnregisteredUserCreateInput } from "./SharingUnregisteredUserCreateInput";
import { SharingUnregisteredUserWhereInput } from "./SharingUnregisteredUserWhereInput";
import { SharingUnregisteredUserWhereUniqueInput } from "./SharingUnregisteredUserWhereUniqueInput";
import { SharingUnregisteredUserFindManyArgs } from "./SharingUnregisteredUserFindManyArgs";
import { SharingUnregisteredUserUpdateInput } from "./SharingUnregisteredUserUpdateInput";
import { SharingUnregisteredUser } from "./SharingUnregisteredUser";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SharingUnregisteredUserControllerBase {
  constructor(
    protected readonly service: SharingUnregisteredUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SharingUnregisteredUser })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SharingUnregisteredUserCreateInput
  ): Promise<SharingUnregisteredUser> {
    return await this.service.create({
      data: {
        ...data,

        sharingId: data.sharingId
          ? {
              connect: data.sharingId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        expiration: true,
        id: true,

        sharingId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [SharingUnregisteredUser] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SharingUnregisteredUserFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<SharingUnregisteredUser[]> {
    const args = plainToClass(
      SharingUnregisteredUserFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        expiration: true,
        id: true,

        sharingId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SharingUnregisteredUser",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SharingUnregisteredUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SharingUnregisteredUserWhereUniqueInput
  ): Promise<SharingUnregisteredUser | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        expiration: true,
        id: true,

        sharingId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
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
    resource: "SharingUnregisteredUser",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SharingUnregisteredUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SharingUnregisteredUserWhereUniqueInput,
    @common.Body() data: SharingUnregisteredUserUpdateInput
  ): Promise<SharingUnregisteredUser | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          sharingId: data.sharingId
            ? {
                connect: data.sharingId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          expiration: true,
          id: true,

          sharingId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
    resource: "SharingUnregisteredUser",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SharingUnregisteredUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SharingUnregisteredUserWhereUniqueInput
  ): Promise<SharingUnregisteredUser | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          expiration: true,
          id: true,

          sharingId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
