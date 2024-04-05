import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
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

  async deleteContact() {
    await this.prismaService.contact.deleteMany({
      where: {
        user_id: '4fff59d9-8ebb-4370-95d3-534aa4de28b6',
      },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        id: '4fff59d9-8ebb-4370-95d3-534aa4de28b6',
        username: 'test',
        name: 'test',
        password: await hash('test', 10),
        token: 'test',
      },
    });
  }
}
