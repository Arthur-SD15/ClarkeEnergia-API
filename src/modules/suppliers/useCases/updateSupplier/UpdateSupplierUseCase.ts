import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';
import { UpdateSupplierDto } from '../../dtos/UpdateSupplier';

@Injectable()
export class UpdateSupplierUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(id: string, updateSupplierDto: UpdateSupplierDto) {
    return this.suppliersRepository.updateSupplier(id, updateSupplierDto);
  }
}