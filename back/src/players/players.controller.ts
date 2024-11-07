import { Body, Controller, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { ConnectedUser } from '../users/_utils/decorator/connecter-user.decorator';
import { User } from '../users/schemas/users.schema';
import { CreatePlayerDto } from './_utils/dtos/request/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  createPlayerForConnectedUser(@ConnectedUser() user: User, @Body() createPlayerDto: CreatePlayerDto) {}
}
