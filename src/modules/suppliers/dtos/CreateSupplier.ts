import { IsString, IsNumber, IsUUID, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateSupplierDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    logo: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsNumber()
    costPerKwh: number;

    @IsNumber()
    minKwhLimit: number;

    @IsNumber()
    totalClients: number;

    @IsNumber()
    averageRating: number;
}
