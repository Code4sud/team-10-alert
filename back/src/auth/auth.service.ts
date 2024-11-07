import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/users/schemas/users.schema';
import { UsersRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';
import { EncryptionService } from '../encryption/encryption.service';
import { LoginDto } from './_utils/dto/requests/login.dto';
import JwtPayloadInterface from './_utils/interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersRepository.findOneByEmail(email);
    if (!user) throw new UnauthorizedException('WRONG_CREDENTIALS');

    const passwordStatus = this.encryptionService.compare(pass, user.password);
    if (!passwordStatus.isPasswordCorrect) throw new UnauthorizedException('WRONG_CREDENTIALS');
    if (passwordStatus.isEncryptionChanged) {
      await this.usersRepository.updatePasswordById(user.id, pass);
    }

    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    const payload: JwtPayloadInterface = { email: user.email, id: user.id, role: user.role };
    return { accessToken: this.jwtService.sign(payload), user: user };
  }
}
