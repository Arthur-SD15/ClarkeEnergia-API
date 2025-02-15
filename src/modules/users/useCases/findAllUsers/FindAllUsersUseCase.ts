import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute() {
    return this.usersRepository.findAllUsers();
  }
}