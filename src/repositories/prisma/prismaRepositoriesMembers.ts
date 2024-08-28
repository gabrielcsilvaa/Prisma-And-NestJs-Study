import { PrismaService } from "src/database/prisma.service";
import { testeMembersRepository } from "../repositoriesMember";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRepositorieMembers implements testeMembersRepository {

    constructor (private prisma: PrismaService) {}
 async create(name: string, memberFunction:string): Promise<void> {
    await this.prisma.bdTeste.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}