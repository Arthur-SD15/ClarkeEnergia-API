import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { ISuppliersRepository } from 'src/modules/suppliers/repositories/ISuppliersRepository';
import { CreateSupplierDto } from 'src/modules/suppliers/dtos/CreateSupplier';
import { UpdateSupplierDto } from 'src/modules/suppliers/dtos/UpdateSupplier';
import { Supplier } from 'src/modules/suppliers/entities/Supplier';

@Injectable()
export class SuppliersRepositoryPrisma implements ISuppliersRepository {
  constructor(private prisma: PrismaService) {}

  async createSupplier(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    return this.prisma.suppliers.create({
      data: createSupplierDto,
    });
  }

  async findSuppliers(): Promise<Supplier[]> {
    return this.prisma.suppliers.findMany();
  }

  async findSupplierById(id: string): Promise<Supplier | null> {
    return this.prisma.suppliers.findUnique({
      where: { id },
    });
  }

  async findSupplierByConsumption(consumption: number): Promise<Supplier[]> {
    return this.prisma.suppliers.findMany({
      where: {
        minKwhLimit: {
          lt: consumption,
        },
      },
    });
  }

  async findByName(name: string): Promise<Supplier | null> {
    return this.prisma.suppliers.findFirst({
      where: { name },
    });
  }

  async updateSupplier(id: string, updateSupplierDto: UpdateSupplierDto): Promise<Supplier> {
    return this.prisma.suppliers.update({
      where: { id },
      data: updateSupplierDto,
    });
  }

  async removeSupplier(id: string): Promise<Supplier> {
    return this.prisma.suppliers.delete({
      where: { id },
    });
  }
}
