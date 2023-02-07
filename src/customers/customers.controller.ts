import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UseFilters } from '@nestjs/common/decorators';
import { CustomersService } from './customers.service';
import { UserNotFoundException } from './exceptions/user-not-found.exceptions';
import { HttpExceptionFilter } from './filters/HttpException.filter';
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
  @Get('username/:username')
  public getCustomerByUsername(@Param('username') username: string) {
    const result = this.customerService.getCustomerByUserName(username);

    if (result) return new SerializedCustomer(result);

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Get('id/:id')
  @UseFilters(HttpExceptionFilter)
  public getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.getCustomerById(id);

    if (customer) return new SerializedCustomer(customer);
    else throw new UserNotFoundException();
  }
}
