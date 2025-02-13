import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpdateSupplierUseCase } from './UpdateSupplierUseCase';
import { UpdateSupplierDto } from '../../dtos/UpdateSupplier';

@Controller('suppliers')
export class UpdateSupplierController {
  constructor(private readonly updateSupplierUseCase: UpdateSupplierUseCase) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
    return this.updateSupplierUseCase.execute(id, updateSupplierDto);
  }
}
