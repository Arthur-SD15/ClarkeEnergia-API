import { Controller, Get, Param } from '@nestjs/common';
import { FindSupplierByIdUseCase } from './findSupplierByIdUseCase';

@Controller('suppliers')
export class FindSupplierByIdController {
  constructor(private readonly findSupplierByIdUseCase: FindSupplierByIdUseCase) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findSupplierByIdUseCase.execute(id);
  }
}