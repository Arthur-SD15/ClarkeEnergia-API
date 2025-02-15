import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepositoryPrisma } from './infra/prisma/repositories/AuthRepositoryPrisma';
import { PrismaService } from 'src/shared/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './google.strategy';
import { IAuthRepository } from './repositories/IAuthRepository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthRepositoryPrisma,
    PrismaService,
    GoogleStrategy,
    {
      provide: IAuthRepository,
      useClass: AuthRepositoryPrisma,
    },
  ],
})
export class AuthModule {}
