import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateAreaDto {
  @IsNotEmpty()
  @IsNumber()
  areaId: number;

  @IsNotEmpty()
  @IsString()
  nombre_area: string;

  @IsNotEmpty()
  @IsString()
  fecha_creacion: string;

  @IsNotEmpty()
  @IsString()
  fecha_modificacion: string;

  @IsOptional()
  @IsNumber()
  sedeId?: number;

}
