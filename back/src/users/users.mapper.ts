import { Injectable } from '@nestjs/common';
import { Player } from '../players/players.schema';
import { GetUserWithPlayerDto } from './_utils/dto/response/get-user-with-player.dto';
import { GetUserDto } from './_utils/dto/response/get-user.dto';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersMapper {
  toGetUserWithPlayerDto = (user: User, player: Player): GetUserWithPlayerDto => ({
    ...this.toGetUser(user),
    player: player,
  });

  toGetUser = (user: User): GetUserDto => ({
    id: user.id,
    email: user.email,
    role: user.role,
  });
}
