/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, HashtagFile, FileDatum, Hashtag } from "@prisma/client";

export class HashtagFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HashtagFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileFindManyArgs>
  ): Promise<number> {
    return this.prisma.hashtagFile.count(args);
  }

  async findMany<T extends Prisma.HashtagFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileFindManyArgs>
  ): Promise<HashtagFile[]> {
    return this.prisma.hashtagFile.findMany(args);
  }
  async findOne<T extends Prisma.HashtagFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileFindUniqueArgs>
  ): Promise<HashtagFile | null> {
    return this.prisma.hashtagFile.findUnique(args);
  }
  async create<T extends Prisma.HashtagFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileCreateArgs>
  ): Promise<HashtagFile> {
    return this.prisma.hashtagFile.create<T>(args);
  }
  async update<T extends Prisma.HashtagFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileUpdateArgs>
  ): Promise<HashtagFile> {
    return this.prisma.hashtagFile.update<T>(args);
  }
  async delete<T extends Prisma.HashtagFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HashtagFileDeleteArgs>
  ): Promise<HashtagFile> {
    return this.prisma.hashtagFile.delete(args);
  }

  async getFileId(parentId: string): Promise<FileDatum | null> {
    return this.prisma.hashtagFile
      .findUnique({
        where: { id: parentId },
      })
      .fileId();
  }

  async getHashtagId(parentId: string): Promise<Hashtag | null> {
    return this.prisma.hashtagFile
      .findUnique({
        where: { id: parentId },
      })
      .hashtagId();
  }
}
