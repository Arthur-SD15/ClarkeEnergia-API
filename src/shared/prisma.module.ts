import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ISuppliersRepository } from 'src/modules/suppliers/repositories/ISuppliersRepository';
import { SuppliersRepositoryPrisma } from 'src/modules/suppliers/infra/prisma/repositories/SuppliersRepositoryPrisma';

@Module({
  providers: [
    PrismaService,
    {
      provide: ISuppliersRepository,
      useClass: SuppliersRepositoryPrisma,
    },
  ],
  exports: [
    ISuppliersRepository,
  ],
})
export class PrismaModule {}
