import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Customers, SerializedCustomer } from './types';

@Injectable()
export class CustomersService {
  private customers: Customers[] = [
    {
      name: 'rafly',
      password: 'afrizal',
    },
    {
      name: 'ridho',
      password: 'gym',
    },
    {
      name: 'ujang',
      password: 'suracep',
    },
  ];

  public getCustomers() {
    return this.customers.map((el) =>
      plainToInstance(SerializedCustomer, this.customers),
    );
  }

  public getCustomerByUserName(username: string) {
    return this.customers.find((el) => el.name === username);
  }
}
