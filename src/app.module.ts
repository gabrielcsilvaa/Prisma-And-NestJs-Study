import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from './database/prisma.service';
import { PrismaRepositorieMembers } from './repositories/prisma/prismaRepositoriesMembers';
import { testeMembersRepository } from './repositories/repositoriesMember';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: testeMembersRepository,
      useClass: PrismaRepositorieMembers,
    }
  ],
})
export class AppModule {}
 