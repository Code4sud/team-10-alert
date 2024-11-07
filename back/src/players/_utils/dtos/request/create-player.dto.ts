import { IsInt, IsPhoneNumber, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsInt()
  age: number;

  @IsPhoneNumber('FR')
  phoneNumber: string;

  @IsPhoneNumber('FR')
  parentPhoneNumber: string;

  @IsString()
  postalCode: string;

  @IsString()
  avatarUrl: string;
}
