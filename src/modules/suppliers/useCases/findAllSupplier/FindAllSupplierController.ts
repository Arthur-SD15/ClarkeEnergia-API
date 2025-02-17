import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { FindAllSuppliersUseCase } from './FindAllSupplierUseCase';
import { validStates } from '../../utils/validStates';
import { Supplier } from '../../entities/Supplier';

@Controller('suppliers')
export class FindAllSuppliersController {
  constructor(private readonly findAllSuppliersUseCase: FindAllSuppliersUseCase) {}

  @Get()
  async findAll(
    @Query('name') name?: string,
    @Query('state') state?: string,
    @Query('averageRating') averageRating?: string,
    @Query('costPerKwh') costPerKwh?: string,
    @Query('minKwhLimit') minKwhLimit?: string,
    @Query('totalClients') totalClients?: string,
  ): Promise<Supplier[]> {
    
    const parsedAverageRating = averageRating ? Number(averageRating) : undefined;
    if (averageRating && isNaN(parsedAverageRating)) {
      throw new BadRequestException('averageRating deve ser um número.');
    }

    const parsedCostPerKwh = costPerKwh ? Number(costPerKwh) : undefined;
    if (costPerKwh && isNaN(parsedCostPerKwh)) {
      throw new BadRequestException('costPerKwh deve ser um número.');
    }

    const parsedMinKwhLimit = minKwhLimit ? Number(minKwhLimit) : undefined;
    if (minKwhLimit && isNaN(parsedMinKwhLimit)) {
      throw new BadRequestException('minKwhLimit deve ser um número.');
    }

    const parsedTotalClients = totalClients ? Number(totalClients) : undefined;
    if (totalClients && isNaN(parsedTotalClients)) {
      throw new BadRequestException('totalClients deve ser um número.');
    }

    if (state && !validStates.includes(state)) {
      throw new BadRequestException('Estado inválido.');
    }

    const filters = {
      name,
      state,
      averageRating: parsedAverageRating,
      costPerKwh: parsedCostPerKwh,
      minKwhLimit: parsedMinKwhLimit,
      totalClients: parsedTotalClients,
    };

    return this.findAllSuppliersUseCase.execute(filters);
  }
}
