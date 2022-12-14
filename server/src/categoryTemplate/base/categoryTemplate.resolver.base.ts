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
import { CreateCategoryTemplateArgs } from "./CreateCategoryTemplateArgs";
import { UpdateCategoryTemplateArgs } from "./UpdateCategoryTemplateArgs";
import { DeleteCategoryTemplateArgs } from "./DeleteCategoryTemplateArgs";
import { CategoryTemplateFindManyArgs } from "./CategoryTemplateFindManyArgs";
import { CategoryTemplateFindUniqueArgs } from "./CategoryTemplateFindUniqueArgs";
import { CategoryTemplate } from "./CategoryTemplate";
import { Category } from "../../category/base/Category";
import { Template } from "../../template/base/Template";
import { CategoryTemplateService } from "../categoryTemplate.service";

@graphql.Resolver(() => CategoryTemplate)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryTemplateResolverBase {
  constructor(
    protected readonly service: CategoryTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "read",
    possession: "any",
  })
  async _categoryTemplatesMeta(
    @graphql.Args() args: CategoryTemplateFindManyArgs
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
  @graphql.Query(() => [CategoryTemplate])
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "read",
    possession: "any",
  })
  async categoryTemplates(
    @graphql.Args() args: CategoryTemplateFindManyArgs
  ): Promise<CategoryTemplate[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CategoryTemplate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "read",
    possession: "own",
  })
  async categoryTemplate(
    @graphql.Args() args: CategoryTemplateFindUniqueArgs
  ): Promise<CategoryTemplate | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CategoryTemplate)
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "create",
    possession: "any",
  })
  async createCategoryTemplate(
    @graphql.Args() args: CreateCategoryTemplateArgs
  ): Promise<CategoryTemplate> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        categoryId: args.data.categoryId
          ? {
              connect: args.data.categoryId,
            }
          : undefined,

        templateId: args.data.templateId
          ? {
              connect: args.data.templateId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CategoryTemplate)
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "update",
    possession: "any",
  })
  async updateCategoryTemplate(
    @graphql.Args() args: UpdateCategoryTemplateArgs
  ): Promise<CategoryTemplate | null> {
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

          templateId: args.data.templateId
            ? {
                connect: args.data.templateId,
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

  @graphql.Mutation(() => CategoryTemplate)
  @nestAccessControl.UseRoles({
    resource: "CategoryTemplate",
    action: "delete",
    possession: "any",
  })
  async deleteCategoryTemplate(
    @graphql.Args() args: DeleteCategoryTemplateArgs
  ): Promise<CategoryTemplate | null> {
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
  @graphql.ResolveField(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categoryId(
    @graphql.Parent() parent: CategoryTemplate
  ): Promise<Category | null> {
    const result = await this.service.getCategoryId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Template, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "any",
  })
  async templateId(
    @graphql.Parent() parent: CategoryTemplate
  ): Promise<Template | null> {
    const result = await this.service.getTemplateId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
