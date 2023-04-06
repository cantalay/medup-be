import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../common/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserDetail(@Req() request) {
    const { user } = request;
    return this.userService.findOneById(user.id);
  }
  @Patch()
  update(@Req() request, @Body() updateUserDto: UpdateUserDto) {
    const { user } = request;
    return this.userService.update(user.id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
