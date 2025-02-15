import { Injectable, BadRequestException } from '@nestjs/common';
import { ISuppliersRepository } from '../../repositories/ISuppliersRepository';
import { validStates } from '../../utils/validStates';

interface IRequest {
  name: string;
  logo: string;
  state: string;
  costPerKwh: number;
  minKwhLimit: number;
  totalClients: number;
  averageRating: number;
}

@Injectable()
export class CreateSupplierUseCase {
  constructor(private readonly suppliersRepository: ISuppliersRepository) {}

  async execute({
    name,
    logo,
    state,
    costPerKwh,
    minKwhLimit,
    totalClients,
    averageRating,
  }: IRequest) {
    const supplierAlreadyExists = await this.suppliersRepository.findByName(name);

    if (supplierAlreadyExists) {
      throw new BadRequestException('Fornecedor já cadastrado.');
    }

    if (averageRating < 1 || averageRating > 5) {
      throw new BadRequestException('A média de avaliação deve ser entre 1 e 5.');
    }

    if(costPerKwh < 1){
      throw new BadRequestException('O custo por KWh não pode ser menor que 1.');
    }

    if(minKwhLimit < 1){
      throw new BadRequestException('O limite mínimo de KWh não pode ser menor que 1.');
    }
    
    if(totalClients < 0){
      throw new BadRequestException('O total de clientes não pode ser negativo.');
    }

    if (!validStates.includes(state)){
      throw new BadRequestException('Estado inválido.');
    }

    const supplier = await this.suppliersRepository.createSupplier({
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
