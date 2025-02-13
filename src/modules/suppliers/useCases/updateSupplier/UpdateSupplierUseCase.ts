import { Injectable, BadRequestException } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';
import { validStates } from '../../utils/validStates';

interface IRequest {
  name?: string;
  logo?: string;
  state?: string;
  costPerKwh?: number;
  minKwhLimit?: number;
  totalClients?: number;
  averageRating?: number;
}

@Injectable()
export class UpdateSupplierUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute(id: string, {
    name,
    logo,
    state,
    costPerKwh,
    minKwhLimit,
    totalClients,
    averageRating,
  }: IRequest) {
    const supplier = await this.suppliersRepository.findSupplierById(id);

    if (!supplier) {
      throw new BadRequestException('Fornecedor não encontrado.');
    }

    if (averageRating && (averageRating < 1 || averageRating > 5)) {
      throw new BadRequestException('A média de avaliação deve ser entre 1 e 5.');
    }

    if (costPerKwh && costPerKwh < 1) {
      throw new BadRequestException('O custo por KWh não pode ser menor que 1.');
    }

    if (minKwhLimit && minKwhLimit < 1) {
      throw new BadRequestException('O limite mínimo de KWh não pode ser menor que 1.');
    }

    if(totalClients && totalClients < 0){
      throw new BadRequestException('O total de clientes não pode ser negativo.');
    }

    if (state && !validStates.includes(state)) {
      throw new BadRequestException('Estado inválido.');
    }

    const supplierAlreadyExists = await this.suppliersRepository.findByName(name);

    if (supplierAlreadyExists && supplierAlreadyExists.id !== id) {
      throw new BadRequestException('Fornecedor já cadastrado.');
    }

    return this.suppliersRepository.updateSupplier(id, {
      name,
      logo,
      state,
      costPerKwh,
      minKwhLimit,
      totalClients,
      averageRating,
    })
  }
}