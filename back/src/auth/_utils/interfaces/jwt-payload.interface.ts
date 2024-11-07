import { UserRoleEnum } from 'src/users/schemas/users.schema';

export default interface JwtPayloadInterface {
  id: string;
  role: UserRoleEnum | string;
  email: string;
}
