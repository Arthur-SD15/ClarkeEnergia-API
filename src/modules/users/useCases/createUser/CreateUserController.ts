import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserManualDto } from "../../dtos/CreateUserManualDto";
import { CreateUserUseCase } from "./CreateUserUseCase";

@Controller('users')
export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    async create(
        @Body() {
            name,
            surname,
            birthDate,
            email,
            password,
        }: CreateUserManualDto,
    ) {

        const user = await this.createUserUseCase.execute({
            name,
            surname,
            birthDate,
            email,
            password,
        });

        return user;
    }
}