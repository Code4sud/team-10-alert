import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import StrongPasswordDecorator from '../../../../_utils/decorators/strong-password.decorator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @StrongPasswordDecorator()
  password: string;

  @IsString()
  @MinLength(3)
  firstname: string;

  @IsString()
  @MinLength(3)
  lastname: string;

  @IsString()
  @MinLength(10)
  phoneNumber: string;

  @IsString()
  @IsOptional()
  parentPhoneNumber?: string;
}
