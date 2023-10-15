import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/AuthResponce";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/login', {username, password})
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/login', {username, password})
    }

    static async logout(): Promise<void> {
        return $api.post('auth/logout')
    }
}