import { Controller, Post, Body } from '@nestjs/common';
import { CreateSupplierUseCase } from './CreateSupplierUseCase';
import { CreateSupplierDto } from '../../dtos/CreateSupplier';

@Controller('suppliers')
export class CreateSupplierController {
  constructor(private readonly createSupplierUseCase: CreateSupplierUseCase) {}

  @Post()
  async create(
    @Body() {
      name,
      logo,
      state,
      costPerKwh,
      minKwhLimit,
      totalClients,
      averageRating,
    }: CreateSupplierDto,
  ) {

    const supplier = await this.createSupplierUseCase.execute({
      name,
      logo,
      state,
      costPerKwh,
      minKwhLimit,
      totalClients,
      averageRating,
    });

    return supplier;
  }
}
