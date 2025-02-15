import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { IAuthRepository } from 'src/modules/auth/repositories/IAuthRepository';
import { User } from 'src/modules/auth/entities/User';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from '@nestjs/common';
import { CreateUserGoogleDto } from 'src/modules/auth/dtos/CreateUserGoogleDto';

@Injectable()
export class AuthRepositoryPrisma implements IAuthRepository {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async createUserGoogle(createUserDto: CreateUserGoogleDto): Promise<User> {
    const userAlreadyExists = await this.prisma.users.findUnique({
      where: { email: createUserDto.email },
    });

    if (userAlreadyExists) {
      throw new BadRequestException('Usuario já cadastrado');
    }

    return this.prisma.users.create({ 
      data: createUserDto 
    });
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({ 
      where: { email } 
    });

    if (user && user.password && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async googleLogin(profile: any): Promise<User> {
    let user = await this.prisma.users.findUnique(
        { where: { googleId: profile.id } 
    });

    if (!user) {
      user = await this.prisma.users.create({
        data: {
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.name.givenName,
          surname: profile.name.familyName,
        },
      });
    }
    return user;
  }

  async generateToken(user: User): Promise<{ access_token: string }> {
    return { access_token: this.jwtService.sign({ id: user.id, email: user.email }) };
  }
}
