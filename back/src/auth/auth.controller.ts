import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './_utils/dto/requests/login.dto';
import { RegisterDto } from './_utils/dto/requests/register.dto';
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
  register(@Body() registerDto: RegisterDto) {
    return this.usersService.createUser(registerDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user.' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
