import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Protect()
  // @Get('me')
  // @ApiOperation({ summary: "Get the current user's information." })
  // getCurrentUser(@ConnectedUser() user: UserDocument) {
  //   return this.usersService.getUser(user);
  // }
  //
  // @Protect()
  // @Get(':userId')
  // @ApiParam({ type: 'string', name: 'userId' })
  // @ApiOperation({ summary: "Get a user's information by its ID." })
  // getUserById(@Param('userId', getDocumentByIdPipe(User)) user: UserDocument) {
  //   return this.usersService.getUser(user);
  // }
  //
  // @Protect()
  // @Delete(':userId')
  // @HttpCode(204)
  // @ApiParam({ type: 'string', name: 'userId' })
  // @ApiOperation({ summary: "Delete a user's account by its ID." })
  // @ApiNoContentResponse({ description: 'User deleted.' })
  // deleteUser(@Param('userId', getDocumentByIdPipe(User)) user: UserDocument) {
  //   return this.usersService.deleteUser(user);
  // }
}
