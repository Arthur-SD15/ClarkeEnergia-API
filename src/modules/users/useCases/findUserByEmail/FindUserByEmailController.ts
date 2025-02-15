import { Controller, Get, Param } from "@nestjs/common";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";

@Controller('users')
export class FindUserByEmailController {
    constructor(private readonly findserByEmailController: FindUserByEmailUseCase) {}

    @Get(':email')
    async findOne(@Param('email') email: string) {
        return this.findserByEmailController.execute(email);
    }
}