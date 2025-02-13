import { Controller, Get } from '@nestjs/common';
import { FindAllSuppliersUseCase } from './findAllSupplierUseCase';

@Controller('suppliers')
export class FindAllSuppliersController {
  constructor(private readonly findAllSuppliersUseCase: FindAllSuppliersUseCase) {}

  @Get()
  async findAll() {
    return this.findAllSuppliersUseCase.execute();
  }
}
