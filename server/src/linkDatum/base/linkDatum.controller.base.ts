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
import { LinkDatumService } from "../linkDatum.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LinkDatumCreateInput } from "./LinkDatumCreateInput";
import { LinkDatumWhereInput } from "./LinkDatumWhereInput";
import { LinkDatumWhereUniqueInput } from "./LinkDatumWhereUniqueInput";
import { LinkDatumFindManyArgs } from "./LinkDatumFindManyArgs";
import { LinkDatumUpdateInput } from "./LinkDatumUpdateInput";
import { LinkDatum } from "./LinkDatum";
import { RequestDatumFindManyArgs } from "../../requestDatum/base/RequestDatumFindManyArgs";
import { RequestDatum } from "../../requestDatum/base/RequestDatum";
import { RequestDatumWhereUniqueInput } from "../../requestDatum/base/RequestDatumWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LinkDatumControllerBase {
  constructor(
    protected readonly service: LinkDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LinkDatum })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: LinkDatumCreateInput): Promise<LinkDatum> {
    return await this.service.create({
      data: {
        ...data,

        categoryId: data.categoryId
          ? {
              connect: data.categoryId,
            }
          : undefined,

        ownerId: data.ownerId
          ? {
              connect: data.ownerId,
            }
          : undefined,
      },
      select: {
        categoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isPublic: true,
        link: true,

        ownerId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [LinkDatum] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(LinkDatumFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<LinkDatum[]> {
    const args = plainToClass(LinkDatumFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        categoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isPublic: true,
        link: true,

        ownerId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LinkDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: LinkDatumWhereUniqueInput
  ): Promise<LinkDatum | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        categoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isPublic: true,
        link: true,

        ownerId: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
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
    resource: "LinkDatum",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LinkDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: LinkDatumWhereUniqueInput,
    @common.Body() data: LinkDatumUpdateInput
  ): Promise<LinkDatum | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          categoryId: data.categoryId
            ? {
                connect: data.categoryId,
              }
            : undefined,

          ownerId: data.ownerId
            ? {
                connect: data.ownerId,
              }
            : undefined,
        },
        select: {
          categoryId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isPublic: true,
          link: true,

          ownerId: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
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
    resource: "LinkDatum",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LinkDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: LinkDatumWhereUniqueInput
  ): Promise<LinkDatum | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          categoryId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isPublic: true,
          link: true,

          ownerId: {
            select: {
              id: true,
            },
          },

          title: true,
          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "RequestDatum",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/requestData")
  @ApiNestedQuery(RequestDatumFindManyArgs)
  async findManyRequestData(
    @common.Req() request: Request,
    @common.Param() params: LinkDatumWhereUniqueInput
  ): Promise<RequestDatum[]> {
    const query = plainToClass(RequestDatumFindManyArgs, request.query);
    const results = await this.service.findRequestData(params.id, {
      ...query,
      select: {
        askId: {
          select: {
            id: true,
          },
        },

        categoryRequestId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,

        fileId: {
          select: {
            id: true,
          },
        },

        id: true,

        linkId: {
          select: {
            id: true,
          },
        },

        recipientId: {
          select: {
            id: true,
          },
        },

        statusId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/requestData")
  async connectRequestData(
    @common.Param() params: LinkDatumWhereUniqueInput,
    @common.Body() body: RequestDatumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestData: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/requestData")
  async updateRequestData(
    @common.Param() params: LinkDatumWhereUniqueInput,
    @common.Body() body: RequestDatumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestData: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "LinkDatum",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/requestData")
  async disconnectRequestData(
    @common.Param() params: LinkDatumWhereUniqueInput,
    @common.Body() body: RequestDatumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      requestData: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}