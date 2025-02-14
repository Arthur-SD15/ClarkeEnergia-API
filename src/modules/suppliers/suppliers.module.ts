import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/prisma.module';
import { CreateSupplierController } from './useCases/createSupplier/CreateSupplierController';
import { FindAllSuppliersController } from './useCases/findAllSupplier/FindAllSupplierController';
import { FindSupplierByIdController } from './useCases/findSupplierById/FindSupplierByIdController';
import { UpdateSupplierController } from './useCases/updateSupplier/UpdateSupplierController';
import { RemoveSupplierController } from './useCases/removeSupplier/RemoveSupplierController';
import { FindSupplierByConsumptionController } from './useCases/findSupplierByConsumption/FindSupplierByConsumptionController';
import { CreateSupplierUseCase } from './useCases/createSupplier/CreateSupplierUseCase';
import { FindAllSuppliersUseCase } from './useCases/findAllSupplier/FindAllSupplierUseCase';
import { FindSupplierByIdUseCase } from './useCases/findSupplierById/FindSupplierByIdUseCase';
import { UpdateSupplierUseCase } from './useCases/updateSupplier/UpdateSupplierUseCase';
import { RemoveSupplierUseCase } from './useCases/removeSupplier/RemoveSupplierUseCase';
import { FindSupplierByConsumptionUseCase } from './useCases/findSupplierByConsumption/FindSupplierByConsumptionUseCase';

@Module({
  imports: [
    PrismaModule,
  ],
  providers: [
    CreateSupplierUseCase,
    FindAllSuppliersUseCase,
    FindSupplierByConsumptionUseCase,
    FindSupplierByIdUseCase,
    UpdateSupplierUseCase,
    RemoveSupplierUseCase,
  ],
  controllers: [
    CreateSupplierController,
    FindAllSuppliersController,
    FindSupplierByConsumptionController,
    FindSupplierByIdController,
    UpdateSupplierController,
    RemoveSupplierController,
  ],
})
export class SuppliersModule {}