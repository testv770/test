/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, EnumUserBlock, User } from "@prisma/client";

export class EnumUserBlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EnumUserBlockFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockFindManyArgs>
  ): Promise<number> {
    return this.prisma.enumUserBlock.count(args);
  }

  async findMany<T extends Prisma.EnumUserBlockFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockFindManyArgs>
  ): Promise<EnumUserBlock[]> {
    return this.prisma.enumUserBlock.findMany(args);
  }
  async findOne<T extends Prisma.EnumUserBlockFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockFindUniqueArgs>
  ): Promise<EnumUserBlock | null> {
    return this.prisma.enumUserBlock.findUnique(args);
  }
  async create<T extends Prisma.EnumUserBlockCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockCreateArgs>
  ): Promise<EnumUserBlock> {
    return this.prisma.enumUserBlock.create<T>(args);
  }
  async update<T extends Prisma.EnumUserBlockUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockUpdateArgs>
  ): Promise<EnumUserBlock> {
    return this.prisma.enumUserBlock.update<T>(args);
  }
  async delete<T extends Prisma.EnumUserBlockDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnumUserBlockDeleteArgs>
  ): Promise<EnumUserBlock> {
    return this.prisma.enumUserBlock.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.enumUserBlock
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }
}
