import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './players.schema';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersRepository {
  constructor(@InjectRepository(Player) private readonly playersModel: Repository<Player>) {}

  findOneById = (userId: string) => this.playersModel.findOneBy({ user_id: userId });
}
