import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
 