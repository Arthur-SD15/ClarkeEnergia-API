import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';

@Injectable()
export class FindSupplierByIdUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(id: string) {
    return this.suppliersRepository.findSupplierById(id);
  }
}