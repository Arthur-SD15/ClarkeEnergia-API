import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@Injectable()
export class FindUserByEmailUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(email: string) {
        return this.usersRepository.findUserByEmail(email);
    }
}