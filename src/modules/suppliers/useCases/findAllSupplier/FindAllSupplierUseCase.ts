import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';

interface IFindAllSuppliersFilters {
  name?: string;
  state?: string;
  averageRating?: number;
  costPerKwh?: number;
  order?: string;
  minKwhLimit?: number;
  totalClients?: number;
}

@Injectable()
export class FindAllSuppliersUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(filters: IFindAllSuppliersFilters) {
    return this.suppliersRepository.findAllSuppliers(
      filters.name,
      filters.state,
      filters.averageRating,
      filters.costPerKwh,
      filters.minKwhLimit,
      filters.totalClients,
    );
  }
}