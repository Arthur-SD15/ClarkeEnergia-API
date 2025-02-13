import { Supplier } from '../entities/Supplier';
import { CreateSupplierDto } from '../dtos/CreateSupplier';
import { UpdateSupplierDto } from '../dtos/UpdateSupplier';

export abstract class ISuppliersRepository {
  abstract createSupplier(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
  abstract findSuppliers(): Promise<Supplier[]>;
  abstract findSupplierById(id: string): Promise<Supplier | null>;
  abstract findByName(name: string): Promise<Supplier | null>;
  abstract updateSupplier(id: string, updateSupplierDto: UpdateSupplierDto): Promise<Supplier>;
  abstract removeSupplier(id: string): Promise<Supplier>;
}
