import { GetUserDto } from './get-user.dto';
import { GetPlayerDto } from '../../../../players/_utils/dtos/response/get-player.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserWithPlayerDto extends GetUserDto {
  @ApiProperty()
  player: GetPlayerDto;
}
