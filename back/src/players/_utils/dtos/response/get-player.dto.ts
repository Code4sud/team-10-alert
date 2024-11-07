import { ApiProperty } from '@nestjs/swagger';

export class GetPlayerDto {
  @ApiProperty()
  gameLevel: number;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  health: number;

  @ApiProperty()
  score: number;
}
