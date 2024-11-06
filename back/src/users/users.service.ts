import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  // createUser = (createUserDto: CreateUserDto) =>
  //   this.usersRepository.createUser(createUserDto).then(this.usersMapper.toGetUserDto);
  //
  // getUser(user: UserDocument) {
  //   return this.usersMapper.toGetUserDto(user);
  // }
  //
  // deleteUser = (user: UserDocument) => this.usersRepository.deleteUser(user);
}
