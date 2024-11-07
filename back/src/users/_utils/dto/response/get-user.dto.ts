import { ApiProperty } from '@nestjs/swagger';
import { UserRoleEnum } from '../../user-role.enum';

export class GetUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ enum: UserRoleEnum })
  role: string;
}
