import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuppliersModule } from './modules/suppliers/suppliers.module';

@Module({
  imports: [SuppliersModule],
  controllers: [AppController],
})

export class AppModule {}