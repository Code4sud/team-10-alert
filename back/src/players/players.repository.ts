import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/schemas/users.schema';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './_utils/dtos/request/create-player.dto';
import { Player } from './players.schema';

@Injectable()
export class PlayersRepository {
  constructor(@InjectRepository(Player) private readonly playersModel: Repository<Player>) {}

  findOneById = (userId: string) => this.playersModel.findOneBy({ user_id: userId });

  createPlayer = (user: User, createPlayerDto: CreatePlayerDto) =>
    this.playersModel.save({ ...createPlayerDto, user_id: user.id });
}
