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
  SuggestionDatum,
  Category,
  User,
  EnumSuggestionDatum,
} from "@prisma/client";

export class SuggestionDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SuggestionDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumFindManyArgs>
  ): Promise<number> {
    return this.prisma.suggestionDatum.count(args);
  }

  async findMany<T extends Prisma.SuggestionDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumFindManyArgs>
  ): Promise<SuggestionDatum[]> {
    return this.prisma.suggestionDatum.findMany(args);
  }
  async findOne<T extends Prisma.SuggestionDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumFindUniqueArgs>
  ): Promise<SuggestionDatum | null> {
    return this.prisma.suggestionDatum.findUnique(args);
  }
  async create<T extends Prisma.SuggestionDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumCreateArgs>
  ): Promise<SuggestionDatum> {
    return this.prisma.suggestionDatum.create<T>(args);
  }
  async update<T extends Prisma.SuggestionDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumUpdateArgs>
  ): Promise<SuggestionDatum> {
    return this.prisma.suggestionDatum.update<T>(args);
  }
  async delete<T extends Prisma.SuggestionDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuggestionDatumDeleteArgs>
  ): Promise<SuggestionDatum> {
    return this.prisma.suggestionDatum.delete(args);
  }

  async getCategorySuggestionId(parentId: string): Promise<Category | null> {
    return this.prisma.suggestionDatum
      .findUnique({
        where: { id: parentId },
      })
      .categorySuggestionId();
  }

  async getRecipientId(parentId: string): Promise<User | null> {
    return this.prisma.suggestionDatum
      .findUnique({
        where: { id: parentId },
      })
      .recipientId();
  }

  async getStatusId(parentId: string): Promise<EnumSuggestionDatum | null> {
    return this.prisma.suggestionDatum
      .findUnique({
        where: { id: parentId },
      })
      .statusId();
  }

  async getSuggestionId(parentId: string): Promise<User | null> {
    return this.prisma.suggestionDatum
      .findUnique({
        where: { id: parentId },
      })
      .suggestionId();
  }
}