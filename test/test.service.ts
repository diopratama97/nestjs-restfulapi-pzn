import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        username: 'test',
      },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        id: uuidv4(),
        username: 'test',
        name: 'test',
        password: await hash('test', 10),
        token: 'test',
      },
    });
  }
}
