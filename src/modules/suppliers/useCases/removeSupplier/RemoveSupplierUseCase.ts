import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';

@Injectable()
export class RemoveSupplierUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(id: string) {
    return this.suppliersRepository.removeSupplier(id);
  }
}
