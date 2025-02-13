import { Controller, Post, Body } from '@nestjs/common';
import { CreateSupplierUseCase } from './CreateSupplierUseCase';
import { CreateSupplierDto } from '../../dtos/CreateSupplier';

@Controller('suppliers')
export class CreateSupplierController {
  constructor(private readonly createSupplierUseCase: CreateSupplierUseCase) {}

  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.createSupplierUseCase.execute(createSupplierDto);
  }
}
