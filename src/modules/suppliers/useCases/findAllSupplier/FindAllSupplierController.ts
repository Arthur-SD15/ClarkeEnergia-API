import { Controller, Get } from '@nestjs/common';
import { FindAllSuppliersUseCase } from './FindAllSupplierUseCase';

@Controller('suppliers')
export class FindAllSuppliersController {
  constructor(private readonly findAllSuppliersUseCase: FindAllSuppliersUseCase) {}

  @Get()
  async findAll() {
    return this.findAllSuppliersUseCase.execute();
  }
}
