import { Injectable } from '@nestjs/common';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private user: Users[] = [
    {
      id: 1,
      name: 'rafly',
    },
    {
      id: 2,
      name: 'adam',
    },
    {
      id: 3,
      name: 'test',
    },
  ];

  findSpecificUser(id: number) {
    return this.user.find((el) => el.id === id);
  }
}
