import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { IsPhone } from '../../user/validators/phone.validation';

export class RegisterRequestDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsPhone()
  phone: string;

  @IsStrongPassword()
  password: string;
}
