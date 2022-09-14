/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Audit, User } from "@prisma/client";

export class AuditServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AuditFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditFindManyArgs>
  ): Promise<number> {
    return this.prisma.audit.count(args);
  }

  async findMany<T extends Prisma.AuditFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditFindManyArgs>
  ): Promise<Audit[]> {
    return this.prisma.audit.findMany(args);
  }
  async findOne<T extends Prisma.AuditFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditFindUniqueArgs>
  ): Promise<Audit | null> {
    return this.prisma.audit.findUnique(args);
  }
  async create<T extends Prisma.AuditCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditCreateArgs>
  ): Promise<Audit> {
    return this.prisma.audit.create<T>(args);
  }
  async update<T extends Prisma.AuditUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditUpdateArgs>
  ): Promise<Audit> {
    return this.prisma.audit.update<T>(args);
  }
  async delete<T extends Prisma.AuditDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditDeleteArgs>
  ): Promise<Audit> {
    return this.prisma.audit.delete(args);
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.audit
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}
