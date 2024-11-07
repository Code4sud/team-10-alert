import { Injectable } from '@nestjs/common';
import { User } from './schemas/users.schema';
import { Player } from '../players/players.schema';
import { GetUserWithPlayerDto } from './_utils/dto/response/get-user-with-player.dto';
import { GetUserDto } from './_utils/dto/response/get-user.dto';

@Injectable()
export class UsersMapper {
  toGetUserWithPlayerDto = (user: User, player: Player): GetUserWithPlayerDto => ({
    ...this.toGetUser(user),
    player: {
      gameLevel: player.gameLevel,
      gender: player.gender,
      avatar: player.avatar,
      health: player.health,
      score: player.score,
    },
  });

  toGetUser = (user: User): GetUserDto => ({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
  });
}
