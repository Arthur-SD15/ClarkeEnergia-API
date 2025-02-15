import { Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/prisma.module";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { FindAllUsersController } from "./useCases/findAllUsers/FindAllUsersController";
import { FindUserByEmailController } from "./useCases/findUserByEmail/FindUserByEmailController";
import { FindUserByIdController } from "./useCases/findUserById/FindUserByIdController";
import { RemoveUserController } from "./useCases/removeUser/RemoveUserController";
import { CreateUserUseCase } from "./useCases/createUser/CreateUserUseCase";
import { FindAllUsersUseCase } from "./useCases/findAllUsers/FindAllUsersUseCase";
import { FindUserByEmailUseCase } from "./useCases/findUserByEmail/FindUserByEmailUseCase";
import { FindUserByIdUseCase } from "./useCases/findUserById/FindUserByIdUseCase";
import { RemoveUserUseCase } from "./useCases/removeUser/RemoveUserUseCase";

@Module({
    imports: [
        PrismaModule
    ],
    providers: [
        CreateUserUseCase,
        FindAllUsersUseCase,
        FindUserByIdUseCase,
        FindUserByEmailUseCase,
        RemoveUserUseCase,
    ],
    controllers: [
        CreateUserController,
        FindAllUsersController,
        FindUserByIdController,
        FindUserByEmailController,
        RemoveUserController,
    ],
})
export class UsersModule {}