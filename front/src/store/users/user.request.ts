import { AzureAxios } from "@/api/axios";
import { LoginDto, LoginResponseDto, RegisterDto } from "./user.model";

const userRequests = {
  login: (loginDto: LoginDto) => AzureAxios.post<LoginResponseDto>("auth/login", { email: loginDto.email, password: loginDto.password }).then((x) => x.data),
  register: (registerDto: RegisterDto) => AzureAxios.post("users/register", registerDto).then((x) => x.data),
};

export default userRequests;
