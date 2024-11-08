import axios from 'axios';
import {useUserStore} from '../store/users/user.store';

export const AzureAxios = axios.create({
    // baseURL: 'https://www.azure-escape.local/api/v1/',
    baseURL: 'http://localhost:3000/api/v1/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
});

AzureAxios.interceptors.request.use((config) => {
    const token = useUserStore.getState().accessToken;
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});
