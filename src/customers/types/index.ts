import { Exclude } from 'class-transformer';

export interface Customers {
  name: string;
  password: string;
}

export class SerializedCustomer {
  name: string;
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedCustomer>) {
    Object.assign(this, partial);
  }
}
