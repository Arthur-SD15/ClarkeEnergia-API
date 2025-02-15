import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ISuppliersRepository } from 'src/modules/suppliers/repositories/ISuppliersRepository';
import { SuppliersRepositoryPrisma } from 'src/modules/suppliers/infra/prisma/repositories/SuppliersRepositoryPrisma';
import { IUsersRepository } from 'src/modules/users/repositories/IUsersRepository';
import { UsersRepositoryPrisma } from 'src/modules/users/infra/prisma/repositories/UsersRepositoryPrisma';

@Module({
  providers: [
    PrismaService,
    {
      provide: ISuppliersRepository,
      useClass: SuppliersRepositoryPrisma,
    },
    {
      provide: IUsersRepository,
      useClass: UsersRepositoryPrisma,
    },
  ],
  exports: [
    ISuppliersRepository,
    IUsersRepository,
  ],
})
export class PrismaModule {}
