import { Injectable } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';
import { CreateSupplierDto } from '../../dtos/CreateSupplier';

@Injectable()
export class CreateSupplierUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(createSupplierDto: CreateSupplierDto) {
    return this.suppliersRepository.createSupplier(createSupplierDto);
  }
}
