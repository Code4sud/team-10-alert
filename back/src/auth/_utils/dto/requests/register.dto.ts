import { IsEmail } from 'class-validator';
import StrongPasswordDecorator from '../../../../_utils/decorators/strong-password.decorator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @StrongPasswordDecorator()
  password: string;
}
