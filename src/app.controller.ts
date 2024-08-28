import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTesteMemberBody } from './database/dtos/createTesteBody';


@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get()
  async getHello(@Body() body: CreateTesteMemberBody) {
    const {name, 'function': memberFunction} = body
    const member = await this.prisma.bdTeste.create({
      data: {
        id: randomUUID(),
        name: '',
        function: '',
      }
    })
    return {
      member,
    }
  }
}
