import { Controller, Get, Query, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { FindSupplierByConsumptionUseCase } from './FindSupplierByConsumptionUseCase';

@Controller('suppliers/by-consumption')
export class FindSupplierByConsumptionController {
    constructor(private readonly findSupplierByConsumptionUseCase: FindSupplierByConsumptionUseCase) {}

    @Get()
    async find(@Query('consumption', ParseIntPipe) consumption: number) {
        if (consumption <= 0) {
            throw new BadRequestException('O numero de consumo deve ser maior que 0.');
        }

        return this.findSupplierByConsumptionUseCase.execute(consumption);
    }
}
