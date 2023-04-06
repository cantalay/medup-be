import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../common/enums/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserService } from '../../user/user.service';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (requiredRoles) {
      const { user } = context.switchToHttp().getRequest();
      const userRole: User = await this.userService.findOneById(user.id);
      if (userRole) {
        return requiredRoles.includes(userRole.role);
      }
    } else {
      return true;
    }
    return false;
  }
}
