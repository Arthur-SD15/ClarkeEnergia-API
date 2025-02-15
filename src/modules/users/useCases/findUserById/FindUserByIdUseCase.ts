import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@Injectable()
export class FindUserByIdUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(id: string) {
        return this.usersRepository.findUserById(id);
    }
}