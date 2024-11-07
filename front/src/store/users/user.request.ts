import {LoginDto, RegisterDto} from './user.model';
import {AzureAxios} from "@/api/axios";

const userRequests = {
    login: (email: string, password: string) =>
        AzureAxios.post<LoginDto>('users/login', {mail: email, password: password}).then((x) => x.data),
    register: (registerDto: RegisterDto) => AzureAxios.post('users/register', registerDto).then((x) => x.data),
};

export default userRequests;
