import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';


@Controller()
export class AppController {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Get()
  async getHello() {
    const member = await this.prisma.bdTeste.create({
      data: {
        id: '1',
        name: 'Gabriel',
        function: 'Duelista'
      }
    })
    return {
      member,
    }
  }
}
