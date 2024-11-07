import { Injectable } from '@nestjs/common';
import { User } from 'src/users/schemas/users.schema';
import { CreatePlayerDto } from './_utils/dtos/request/create-player.dto';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  createPlayer = (user: User, createPlayerDto: CreatePlayerDto) =>
    this.playersRepository.createPlayer(user, createPlayerDto);
}
