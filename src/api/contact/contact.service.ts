import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../common/prisma.service';
import { Logger } from 'winston';
import { User } from '@prisma/client';
import {
  ContactResponse,
  CreateContactRequest,
} from '../../model/contact.model';
import { ValidationService } from '../../common/validation.service';
import { ContactValidation } from './contact.validation';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ContactService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(
    user: User,
    req: CreateContactRequest,
  ): Promise<ContactResponse> {
    this.logger.debug(
      `ContactService.Create(${JSON.stringify(req)}), user (${JSON.stringify(user)})`,
    );

    const createReq: CreateContactRequest = this.validationService.validate(
      ContactValidation.CREATE,
      req,
    );

    const contact = await this.prismaService.contact.create({
      data: {
        id: uuidv4(),
        user_id: user.id,
        email: createReq.email,
        phone: createReq.phone,
        first_name: createReq.first_name,
        last_name: createReq.last_name,
      },
    });

    return {
      id: contact.id,
      email: contact.email,
      first_name: contact.first_name,
      last_name: contact.last_name,
      phone: contact.phone,
    };
  }
}
