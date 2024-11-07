export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  accessToken: string;
  user: GetUserDto;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface GetUserDto {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
