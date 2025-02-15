import { User } from "../entities/User";
import { CreateUserGoogleDto } from "../dtos/CreateUserGoogleDto";

export abstract class IAuthRepository {
    abstract createUserGoogle(createUserDto: CreateUserGoogleDto): Promise<User>;
    abstract validateUser(email: string, password: string): Promise<User | null>;
    abstract googleLogin(profile: any): Promise<User>;
    abstract generateToken(user: User): Promise<{ access_token: string }>;
}
