import { IsString, IsNumber, IsUUID, IsOptional, IsDefined, IsNotEmpty } from 'class-validator';

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
    @IsNotEmpty()
    costPerKwh: number;

    @IsNumber()
    @IsNotEmpty()
    minKwhLimit: number;

    @IsNumber()
    @IsNotEmpty()
    totalClients: number;

    @IsNumber()
    @IsNotEmpty()
    averageRating: number;
}
