import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/_utils/dto/requests/register.dto';
import { EncryptionService } from 'src/encryption/encryption.service';
import { PlayersRepository } from '../players/players.repository';
import { User, UserRoleEnum } from './schemas/users.schema';
import { UsersMapper } from './users.mapper';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptionService: EncryptionService,
    private readonly playersRepository: PlayersRepository,
    private readonly usersMapper: UsersMapper,
  ) {}

  createUser = (registerDto: RegisterDto) => {
    const password = this.encryptionService.encrypt(registerDto.password);
    return this.usersRepository.createUser(registerDto, password);
  };

  getAllUsers = () => this.usersRepository.getAllUsers();

  async getConnectedUser(user: User) {
    if (user.role !== UserRoleEnum.USER) return this.usersMapper.toGetUser(user);
    else {
      const player = await this.playersRepository.findOneById(user.id);
      return this.usersMapper.toGetUserWithPlayerDto(user, player);
    }
  }
}
