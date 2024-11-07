export interface LoginDto {
  access_token: string;
  user: GetUserDto;
}

export interface RegisterDto {
  userName: string;
  mail: string;
  password: string;
}

export interface GetUserDto {
  id: string;
  userName: string;
  mail: string;
}
