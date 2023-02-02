import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { SerializedCustomer } from './types';

@Controller('customers')
export class CustomersController {
  constructor(
    @Inject('SERVICE_TOKEN') private readonly customerService: CustomersService,
  ) {}

  @Get('')
  public getAllCustomers() {
    return this.customerService.getCustomers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  public getCustomerByUsername(@Param('username') username: string) {
    const result = this.customerService.getCustomerByUserName(username);

    if (result) return new SerializedCustomer(result);

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
