/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, UserFcm, User } from "@prisma/client";

export class UserFcmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserFcmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmFindManyArgs>
  ): Promise<number> {
    return this.prisma.userFcm.count(args);
  }

  async findMany<T extends Prisma.UserFcmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmFindManyArgs>
  ): Promise<UserFcm[]> {
    return this.prisma.userFcm.findMany(args);
  }
  async findOne<T extends Prisma.UserFcmFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmFindUniqueArgs>
  ): Promise<UserFcm | null> {
    return this.prisma.userFcm.findUnique(args);
  }
  async create<T extends Prisma.UserFcmCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmCreateArgs>
  ): Promise<UserFcm> {
    return this.prisma.userFcm.create<T>(args);
  }
  async update<T extends Prisma.UserFcmUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmUpdateArgs>
  ): Promise<UserFcm> {
    return this.prisma.userFcm.update<T>(args);
  }
  async delete<T extends Prisma.UserFcmDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFcmDeleteArgs>
  ): Promise<UserFcm> {
    return this.prisma.userFcm.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.userFcm
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
