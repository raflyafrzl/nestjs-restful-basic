import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from './addressuser.dto';

export default class CreateUserDTO {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  id: number;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO;
}
