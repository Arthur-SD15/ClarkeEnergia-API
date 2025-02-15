import { Controller, Get } from '@nestjs/common';
import { FindAllUsersUseCase } from './FindAllUsersUseCase';

@Controller('users')
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @Get()
  async findAll() {
    return this.findAllUsersUseCase.execute();
  }
}