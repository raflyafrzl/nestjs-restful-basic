import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Users } from 'src/users/users.interface';
import { Customers, SerializedCustomer } from './types';

@Injectable()
export class CustomersService {
  private customers: Customers[] = [
    {
      id: 1,
      name: 'rafly',
      password: 'afrizal',
    },
    {
      id: 2,
      name: 'ridho',
      password: 'gym',
    },
    {
      id: 3,
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

  public getCustomerById(id: number): Customers {
    return this.customers.find((customer) => customer.id === id);
  }
}
