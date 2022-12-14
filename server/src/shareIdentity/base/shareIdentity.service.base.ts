/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ShareIdentity, User } from "@prisma/client";

export class ShareIdentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ShareIdentityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityFindManyArgs>
  ): Promise<number> {
    return this.prisma.shareIdentity.count(args);
  }

  async findMany<T extends Prisma.ShareIdentityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityFindManyArgs>
  ): Promise<ShareIdentity[]> {
    return this.prisma.shareIdentity.findMany(args);
  }
  async findOne<T extends Prisma.ShareIdentityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityFindUniqueArgs>
  ): Promise<ShareIdentity | null> {
    return this.prisma.shareIdentity.findUnique(args);
  }
  async create<T extends Prisma.ShareIdentityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityCreateArgs>
  ): Promise<ShareIdentity> {
    return this.prisma.shareIdentity.create<T>(args);
  }
  async update<T extends Prisma.ShareIdentityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityUpdateArgs>
  ): Promise<ShareIdentity> {
    return this.prisma.shareIdentity.update<T>(args);
  }
  async delete<T extends Prisma.ShareIdentityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShareIdentityDeleteArgs>
  ): Promise<ShareIdentity> {
    return this.prisma.shareIdentity.delete(args);
  }

  async getIdentitySharedId(parentId: string): Promise<User | null> {
    return this.prisma.shareIdentity
      .findUnique({
        where: { id: parentId },
      })
      .identitySharedId();
  }
}
