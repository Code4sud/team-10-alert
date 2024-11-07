import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protect } from '../auth/_utils/decorator/protect.decorator';
import { ConnectedUser } from './_utils/decorator/connecter-user.decorator';
import { User } from './schemas/users.schema';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Protect()
  @ApiOperation({ summary: 'Get user profile' })
  @Get('/me')
  getUserProfile(@ConnectedUser() user: User) {
    return this.usersService.getConnectedUser(user);
  }
}
