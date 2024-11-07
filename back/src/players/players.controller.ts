import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protect } from 'src/auth/_utils/decorator/protect.decorator';
import { ConnectedUser } from '../users/_utils/decorator/connecter-user.decorator';
import { User } from '../users/schemas/users.schema';
import { CreatePlayerDto } from './_utils/dtos/request/create-player.dto';
import { PlayersRepository } from './players.repository';
import { PlayersService } from './players.service';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(
    private readonly playersService: PlayersService,
    private readonly playersRepository: PlayersRepository,
  ) {}

  @Protect()
  @ApiOperation({ summary: 'Get player for connected user' })
  @Post()
  createPlayerForConnectedUser(@ConnectedUser() user: User, @Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.createPlayer(user, createPlayerDto);
  }
}
