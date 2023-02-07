import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { ValidateUserAccountMiddleware } from 'src/middlewares/validate-users-account.middleware';

import { ValidateUsersMiddleware } from 'src/middlewares/validate-users.middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateUsersMiddleware, ValidateUserAccountMiddleware)
      .exclude({
        path: 'users/create',
        method: RequestMethod.POST,
      })
      .forRoutes(UsersController);
  }
}
