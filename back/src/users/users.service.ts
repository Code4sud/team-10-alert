import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/_utils/dto/requests/register.dto';
import { EncryptionService } from 'src/encryption/encryption.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptionService: EncryptionService,
  ) {}

  createUser = (registerDto: RegisterDto) => {
    const password = this.encryptionService.encrypt(registerDto.password);
    return this.usersRepository.createUser(registerDto, password);
  };

  getAllUsers = () => this.usersRepository.getAllUsers();
}
