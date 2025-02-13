import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';

@Injectable()
export class FindAllSuppliersUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute() {
    return this.suppliersRepository.findSuppliers();
  }
}