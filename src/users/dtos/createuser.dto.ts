import { IsEmail, IsNumberString, IsNotEmpty } from 'class-validator';

export default class CreateUserDTO {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
