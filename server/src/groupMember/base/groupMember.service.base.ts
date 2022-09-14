/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, GroupMember, Group, User } from "@prisma/client";

export class GroupMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GroupMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberFindManyArgs>
  ): Promise<number> {
    return this.prisma.groupMember.count(args);
  }

  async findMany<T extends Prisma.GroupMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberFindManyArgs>
  ): Promise<GroupMember[]> {
    return this.prisma.groupMember.findMany(args);
  }
  async findOne<T extends Prisma.GroupMemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberFindUniqueArgs>
  ): Promise<GroupMember | null> {
    return this.prisma.groupMember.findUnique(args);
  }
  async create<T extends Prisma.GroupMemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberCreateArgs>
  ): Promise<GroupMember> {
    return this.prisma.groupMember.create<T>(args);
  }
  async update<T extends Prisma.GroupMemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberUpdateArgs>
  ): Promise<GroupMember> {
    return this.prisma.groupMember.update<T>(args);
  }
  async delete<T extends Prisma.GroupMemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupMemberDeleteArgs>
  ): Promise<GroupMember> {
    return this.prisma.groupMember.delete(args);
  }

  async getGroupId(parentId: string): Promise<Group | null> {
    return this.prisma.groupMember
      .findUnique({
        where: { id: parentId },
      })
      .groupId();
  }

  async getMemberId(parentId: string): Promise<User | null> {
    return this.prisma.groupMember
      .findUnique({
        where: { id: parentId },
      })
      .memberId();
  }
}