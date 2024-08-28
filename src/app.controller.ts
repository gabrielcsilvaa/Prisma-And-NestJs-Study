import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTesteMemberBody } from './database/dtos/createTesteBody';
import { testeMembersRepository } from './repositories/repositoriesMember';


@Controller()
export class AppController {
  constructor( private testeMembersRepository: testeMembersRepository ) {}

  @Post()
  async getHello(@Body() body: CreateTesteMemberBody) {
    const {name, 'function': memberFunction} = body

    await this.testeMembersRepository.create(name, memberFunction)

    // const member = await this.prisma.bdTeste.create({
    //   data: {
    //     id: randomUUID(),
    //     name: '',
    //     function: '',
    //   }
    // })
  }
}
