import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { IUsersRepository } from 'src/modules/users/repositories/IUsersRepository';
import { CreateUserManualDto } from 'src/modules/users/dtos/CreateUserManualDto';
import { User } from 'src/modules/users/entities/User';

@Injectable()
export class UsersRepositoryPrisma implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserManualDto): Promise<User> {
    return this.prisma.users.create({ 
      data: createUserDto 
    });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  async findUserById(id: string): Promise<User | null> {
    return this.prisma.users.findUnique({ 
      where: { id } 
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: { email } 
    });
  }

  async removeUser(id: string): Promise<User> {
    return this.prisma.users.delete({ 
      where: { id } 
    });
  }
}
