import { Exclude } from 'class-transformer';

export interface Customers {
  id: number;
  name: string;
  password: string;
}

export class SerializedCustomer {
  id: number;
  name: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedCustomer>) {
    Object.assign(this, partial);
  }
}
