import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/prisma.module';
import { CreateSupplierController } from './useCases/createSupplier/CreateSupplierController';
import { FindAllSuppliersController } from './useCases/findAllSupplier/findAllSupplierController';
import { FindSupplierByIdController } from './useCases/findSupplierById/findSupplierByIdController';
import { UpdateSupplierController } from './useCases/updateSupplier/UpdateSupplierController';
import { RemoveSupplierController } from './useCases/removeSupplier/RemoveSupplierController';
import { CreateSupplierUseCase } from './useCases/createSupplier/CreateSupplierUseCase';
import { FindAllSuppliersUseCase } from './useCases/findAllSupplier/findAllSupplierUseCase';
import { FindSupplierByIdUseCase } from './useCases/findSupplierById/findSupplierByIdUseCase';
import { UpdateSupplierUseCase } from './useCases/updateSupplier/UpdateSupplierUseCase';
import { RemoveSupplierUseCase } from './useCases/removeSupplier/RemoveSupplierUseCase';

@Module({
  imports: [
    PrismaModule,
  ],
  providers: [
    CreateSupplierUseCase,
    FindAllSuppliersUseCase,
    FindSupplierByIdUseCase,
    UpdateSupplierUseCase,
    RemoveSupplierUseCase,
  ],
  controllers: [
    CreateSupplierController,
    FindAllSuppliersController,
    FindSupplierByIdController,
    UpdateSupplierController,
    RemoveSupplierController,
  ],
})
export class SuppliersModule {}