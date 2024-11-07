import { ApiProperty } from '@nestjs/swagger';

export class GetPlayerDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  parentPhoneNumber: string;

  @ApiProperty()
  postalCode: string;

  @ApiProperty()
  avatarUrl: string;

  @ApiProperty()
  healthPoints: number;

  @ApiProperty()
  wisePoints: number;
}
