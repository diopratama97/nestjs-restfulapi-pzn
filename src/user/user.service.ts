import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from '../common/validation.service';
import { RegisterUserRequest, UserResponse } from '../model/user.model';
import { Logger } from 'winston';
import { UserValidation } from './user.validation';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../common/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    private validationService: ValidationService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
  ) {}

  async register(req: RegisterUserRequest): Promise<UserResponse> {
    this.logger.info(`Register new User ${JSON.stringify(req)}`);

    const registerReq: RegisterUserRequest = this.validationService.validate(
      UserValidation.REGISTER,
      req,
    );

    const findUser = await this.prismaService.user.count({
      where: {
        username: registerReq.username,
      },
    });

    if (findUser !== 0) {
      throw new HttpException('Username already exist', 400);
    }

    registerReq.password = await hash(registerReq.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        id: uuidv4(),
        ...registerReq,
      },
    });

    return {
      id: user.id,
      username: user.username,
      name: user.name,
    };
  }
}
