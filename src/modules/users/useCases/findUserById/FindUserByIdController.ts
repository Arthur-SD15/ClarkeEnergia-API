import { Controller, Get, Param } from "@nestjs/common";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

@Controller('users')
export class FindUserByIdController {
    constructor(private readonly findserByIdController: FindUserByIdUseCase) {}

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.findserByIdController.execute(id);
    }
}