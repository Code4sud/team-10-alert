import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Protect } from '../auth/_utils/decorator/protect.decorator';
import { ConnectedUser } from './_utils/decorator/connecter-user.decorator';
import { User } from './schemas/users.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Protect()
  @Get('/me')
  getUserProfile(@ConnectedUser() user: User) {
    return this.usersService.getConnectedUser(user);
  }
}
