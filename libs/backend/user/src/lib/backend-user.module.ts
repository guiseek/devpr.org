import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService
  ],
  exports: [UserService],
})
export class BackendUserModule {}