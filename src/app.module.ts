import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [SuppliersModule, UsersModule, AuthModule],
  controllers: [AppController],
})

export class AppModule {}