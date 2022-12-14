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
import { SuggestionDatumService } from "../suggestionDatum.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SuggestionDatumCreateInput } from "./SuggestionDatumCreateInput";
import { SuggestionDatumWhereInput } from "./SuggestionDatumWhereInput";
import { SuggestionDatumWhereUniqueInput } from "./SuggestionDatumWhereUniqueInput";
import { SuggestionDatumFindManyArgs } from "./SuggestionDatumFindManyArgs";
import { SuggestionDatumUpdateInput } from "./SuggestionDatumUpdateInput";
import { SuggestionDatum } from "./SuggestionDatum";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SuggestionDatumControllerBase {
  constructor(
    protected readonly service: SuggestionDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SuggestionDatum",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SuggestionDatum })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SuggestionDatumCreateInput
  ): Promise<SuggestionDatum> {
    return await this.service.create({
      data: {
        ...data,

        categorySuggestionId: data.categorySuggestionId
          ? {
              connect: data.categorySuggestionId,
            }
          : undefined,

        recipientId: data.recipientId
          ? {
              connect: data.recipientId,
            }
          : undefined,

        statusId: data.statusId
          ? {
              connect: data.statusId,
            }
          : undefined,

        suggestionId: data.suggestionId
          ? {
              connect: data.suggestionId,
            }
          : undefined,
      },
      select: {
        categorySuggestionId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,

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

        suggestionId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SuggestionDatum",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [SuggestionDatum] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SuggestionDatumFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<SuggestionDatum[]> {
    const args = plainToClass(SuggestionDatumFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        categorySuggestionId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,

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

        suggestionId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SuggestionDatum",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SuggestionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SuggestionDatumWhereUniqueInput
  ): Promise<SuggestionDatum | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        categorySuggestionId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        duration: true,
        id: true,

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

        suggestionId: {
          select: {
            id: true,
          },
        },

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
    resource: "SuggestionDatum",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SuggestionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SuggestionDatumWhereUniqueInput,
    @common.Body() data: SuggestionDatumUpdateInput
  ): Promise<SuggestionDatum | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          categorySuggestionId: data.categorySuggestionId
            ? {
                connect: data.categorySuggestionId,
              }
            : undefined,

          recipientId: data.recipientId
            ? {
                connect: data.recipientId,
              }
            : undefined,

          statusId: data.statusId
            ? {
                connect: data.statusId,
              }
            : undefined,

          suggestionId: data.suggestionId
            ? {
                connect: data.suggestionId,
              }
            : undefined,
        },
        select: {
          categorySuggestionId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          duration: true,
          id: true,

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

          suggestionId: {
            select: {
              id: true,
            },
          },

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
    resource: "SuggestionDatum",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SuggestionDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SuggestionDatumWhereUniqueInput
  ): Promise<SuggestionDatum | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          categorySuggestionId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          duration: true,
          id: true,

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

          suggestionId: {
            select: {
              id: true,
            },
          },

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
}
