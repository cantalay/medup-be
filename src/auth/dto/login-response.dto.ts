import { IsNotEmpty, IsString } from 'class-validator';

export class LoginResponseDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  fullName: string;
}
