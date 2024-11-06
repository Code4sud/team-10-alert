import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/_utils/dto/request/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './_utils/dto/request/login.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register user.' })
  register(@Body() body: CreateUserDto) {
    // return this.usersService.createUser(body);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user.' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
