import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from '../common/validation.service';
import {
  LoginUserRequest,
  RegisterUserRequest,
  UserResponse,
} from '../model/user.model';
import { Logger } from 'winston';
import { UserValidation } from './user.validation';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../common/prisma.service';
import { hash, compare } from 'bcryptjs';

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

  async login(req: LoginUserRequest): Promise<UserResponse> {
    this.logger.info(`UserService.login (${JSON.stringify(req)})`);

    const loginReq: LoginUserRequest = this.validationService.validate(
      UserValidation.LOGIN,
      req,
    );

    let user = await this.prismaService.user.findFirst({
      where: {
        username: loginReq.username,
      },
    });

    if (!user) {
      throw new HttpException('Username or password is invalid', 401);
    }

    const isPasswordValid = await compare(loginReq.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Username or password is invalid', 401);
    }

    user = await this.prismaService.user.update({
      where: {
        username: user.username,
      },
      data: {
        token: uuidv4(),
      },
    });

    return {
      username: user.username,
      name: user.name,
      token: user.token,
    };
  }
}
