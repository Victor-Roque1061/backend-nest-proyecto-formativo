import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateSedeDto {
  @IsNotEmpty()
  @IsString()
  nombre_sede: string;

  @IsNotEmpty()
  @IsString()
  direccion_sede: string;

  @IsNotEmpty()
  @IsString()
  fecha_creacion: Date;

  @IsNotEmpty()
  @IsString()
  fecha_modificacion: Date;

  @IsOptional()
  @IsNumber()
  centroId?: number;
}
