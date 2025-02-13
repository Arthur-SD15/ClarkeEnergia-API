import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateSupplierDto {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    logo?: string;
  
    @IsString()
    @IsOptional()
    state?: string;
  
    @IsNumber()
    @IsOptional()
    costPerKwh?: number;
  
    @IsNumber()
    @IsOptional()
    minKwhLimit?: number;
  
    @IsNumber()
    @IsOptional()
    totalClients?: number;
  
    @IsNumber()
    @IsOptional()
    averageRating?: number;
}