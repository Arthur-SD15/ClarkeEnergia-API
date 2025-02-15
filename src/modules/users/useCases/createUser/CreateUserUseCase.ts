import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    name: string;
    surname: string;
    birthDate: Date;
    email: string;
    password: string;
}

@Injectable()
export class CreateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute({
        name,
        surname,
        birthDate,
        email,
        password,
    }: IRequest) {
        const userAlreadyExists = await this.usersRepository.findUserByEmail(email);

        if (userAlreadyExists) {
            throw new BadRequestException('Usuário já cadastrado.');
        }

        if (password.length < 6) {
            throw new BadRequestException('A senha deve conter no mínimo 6 caracteres.');
        }

        if (birthDate > new Date()) {
            throw new BadRequestException('Data de nascimento inválida.');
        }

        const passwordHash = await bcrypt.hash(password, 8);

        const user = await this.usersRepository.createUser({
            name,
            surname,
            birthDate,
            email,
            password: passwordHash,
        });

        return user;
    }
}