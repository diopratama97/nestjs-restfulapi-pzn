import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './api/user/user.module';
import { ContactModule } from './api/contact/contact.module';

@Module({
  imports: [CommonModule, UserModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
