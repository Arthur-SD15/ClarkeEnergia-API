import { Controller, Delete, Param } from '@nestjs/common';
import { RemoveSupplierUseCase } from './RemoveSupplierUseCase';

@Controller('suppliers')
export class RemoveSupplierController {
  constructor(private readonly removeSupplierUseCase: RemoveSupplierUseCase) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.removeSupplierUseCase.execute(id);
  }
}
