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
  RequestDatum,
  User,
  Category,
  FileDatum,
  LinkDatum,
  EnumRequestDatum,
} from "@prisma/client";

export class RequestDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RequestDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumFindManyArgs>
  ): Promise<number> {
    return this.prisma.requestDatum.count(args);
  }

  async findMany<T extends Prisma.RequestDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumFindManyArgs>
  ): Promise<RequestDatum[]> {
    return this.prisma.requestDatum.findMany(args);
  }
  async findOne<T extends Prisma.RequestDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumFindUniqueArgs>
  ): Promise<RequestDatum | null> {
    return this.prisma.requestDatum.findUnique(args);
  }
  async create<T extends Prisma.RequestDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumCreateArgs>
  ): Promise<RequestDatum> {
    return this.prisma.requestDatum.create<T>(args);
  }
  async update<T extends Prisma.RequestDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumUpdateArgs>
  ): Promise<RequestDatum> {
    return this.prisma.requestDatum.update<T>(args);
  }
  async delete<T extends Prisma.RequestDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RequestDatumDeleteArgs>
  ): Promise<RequestDatum> {
    return this.prisma.requestDatum.delete(args);
  }

  async getAskId(parentId: string): Promise<User | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .askId();
  }

  async getCategoryRequestId(parentId: string): Promise<Category | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .categoryRequestId();
  }

  async getFileId(parentId: string): Promise<FileDatum | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .fileId();
  }

  async getLinkId(parentId: string): Promise<LinkDatum | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .linkId();
  }

  async getRecipientId(parentId: string): Promise<User | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .recipientId();
  }

  async getStatusId(parentId: string): Promise<EnumRequestDatum | null> {
    return this.prisma.requestDatum
      .findUnique({
        where: { id: parentId },
      })
      .statusId();
  }
}