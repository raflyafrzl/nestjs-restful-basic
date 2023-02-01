import { Injectable } from '@nestjs/common';
import CreateUserDTO from './dtos/createuser.dto';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      name: 'rafly',
      email: 'rafly@gmail.com',
    },
    {
      id: 2,
      name: 'adam',
      email: 'adam@gmail.com',
    },
    {
      id: 3,
      name: 'test',
      email: 'test@gmail.com',
    },
  ];

  findAll(): Users[] {
    return this.users;
  }

  findSpecificUser(id: number) {
    return this.users.find((el) => el.id === id);
  }

  async insertData(data: CreateUserDTO): Promise<CreateUserDTO> {
    data.name = `USER ${data.name}`;
    this.users.push(data);
    return this.users[this.users.length - 1];
  }
}
