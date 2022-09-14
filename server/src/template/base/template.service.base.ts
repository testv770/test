/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Template,
  CategoryTemplate,
  GroupTemplate,
  User,
} from "@prisma/client";

export class TemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindManyArgs>
  ): Promise<number> {
    return this.prisma.template.count(args);
  }

  async findMany<T extends Prisma.TemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindManyArgs>
  ): Promise<Template[]> {
    return this.prisma.template.findMany(args);
  }
  async findOne<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<Template | null> {
    return this.prisma.template.findUnique(args);
  }
  async create<T extends Prisma.TemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateCreateArgs>
  ): Promise<Template> {
    return this.prisma.template.create<T>(args);
  }
  async update<T extends Prisma.TemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateUpdateArgs>
  ): Promise<Template> {
    return this.prisma.template.update<T>(args);
  }
  async delete<T extends Prisma.TemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDeleteArgs>
  ): Promise<Template> {
    return this.prisma.template.delete(args);
  }

  async findCategoryTemplates(
    parentId: string,
    args: Prisma.CategoryTemplateFindManyArgs
  ): Promise<CategoryTemplate[]> {
    return this.prisma.template
      .findUnique({
        where: { id: parentId },
      })
      .categoryTemplates(args);
  }

  async findGroupTemplates(
    parentId: string,
    args: Prisma.GroupTemplateFindManyArgs
  ): Promise<GroupTemplate[]> {
    return this.prisma.template
      .findUnique({
        where: { id: parentId },
      })
      .groupTemplates(args);
  }

  async getOwnerId(parentId: string): Promise<User | null> {
    return this.prisma.template
      .findUnique({
        where: { id: parentId },
      })
      .ownerId();
  }
}
