import { User } from '../entities/User';
import { CreateUserManualDto } from '../dtos/CreateUserManualDto';

export abstract class IUsersRepository {
  abstract createUser(createUserDto: CreateUserManualDto): Promise<User>;
  abstract findAllUsers(): Promise<User[]>;
  abstract findUserById(id: string): Promise<User | null>;
  abstract findUserByEmail(email: string): Promise<User | null>;
  abstract removeUser(id: string): Promise<User>;
}
