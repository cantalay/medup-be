import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterRequestDto } from './dto/register-request.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    return this.jwtService.sign(payload);
  }

  async register(registerRequestDto: RegisterRequestDto) {
    return await this.userService.create(registerRequestDto as CreateUserDto);
  }
}
