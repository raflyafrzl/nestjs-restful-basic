import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  controllers: [CustomersController],
  providers: [
    {
      provide: 'SERVICE_TOKEN',
      useClass: CustomersService,
    },
  ],
})
export class CustomersModule {}
