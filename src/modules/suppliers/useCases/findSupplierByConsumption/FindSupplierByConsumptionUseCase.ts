import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';

@Injectable()
export class FindSupplierByConsumptionUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(consumption: number) {
    return this.suppliersRepository.findSupplierByConsumption(consumption);
  }
}
