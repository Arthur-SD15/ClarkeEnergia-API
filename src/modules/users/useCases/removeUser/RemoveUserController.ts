import { Controller, Delete, Param } from "@nestjs/common";
import { RemoveUserUseCase } from "./RemoveUserUseCase";

@Controller('users')
export class RemoveUserController {
  constructor(private readonly removeUserUseCase: RemoveUserUseCase) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.removeUserUseCase.execute(id);
  }
}