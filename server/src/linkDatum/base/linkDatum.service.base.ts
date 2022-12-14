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
  LinkDatum,
  RequestDatum,
  Category,
  User,
} from "@prisma/client";

export class LinkDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LinkDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumFindManyArgs>
  ): Promise<number> {
    return this.prisma.linkDatum.count(args);
  }

  async findMany<T extends Prisma.LinkDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumFindManyArgs>
  ): Promise<LinkDatum[]> {
    return this.prisma.linkDatum.findMany(args);
  }
  async findOne<T extends Prisma.LinkDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumFindUniqueArgs>
  ): Promise<LinkDatum | null> {
    return this.prisma.linkDatum.findUnique(args);
  }
  async create<T extends Prisma.LinkDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumCreateArgs>
  ): Promise<LinkDatum> {
    return this.prisma.linkDatum.create<T>(args);
  }
  async update<T extends Prisma.LinkDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumUpdateArgs>
  ): Promise<LinkDatum> {
    return this.prisma.linkDatum.update<T>(args);
  }
  async delete<T extends Prisma.LinkDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDatumDeleteArgs>
  ): Promise<LinkDatum> {
    return this.prisma.linkDatum.delete(args);
  }

  async findRequestData(
    parentId: string,
    args: Prisma.RequestDatumFindManyArgs
  ): Promise<RequestDatum[]> {
    return this.prisma.linkDatum
      .findUnique({
        where: { id: parentId },
      })
      .requestData(args);
  }

  async getCategoryId(parentId: string): Promise<Category | null> {
    return this.prisma.linkDatum
      .findUnique({
        where: { id: parentId },
      })
      .categoryId();
  }

  async getOwnerId(parentId: string): Promise<User | null> {
    return this.prisma.linkDatum
      .findUnique({
        where: { id: parentId },
      })
      .ownerId();
  }
}
