import { SessionDocument, UserDocument, UserProps } from "../models";
export declare class AuthService {
    private static instance?;
    static getInstance(): AuthService;
    private constructor();
    subscribeUser(user: Partial<UserProps>): Promise<UserDocument>;
    logIn(info: Pick<UserProps, 'login' | 'password'>, platform: string): Promise<SessionDocument | null>;
    getUserFrom(token: string): Promise<UserProps | null>;
}
