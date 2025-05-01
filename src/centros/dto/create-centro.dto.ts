import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCentroDto {
  @IsNotEmpty()
  @IsString()
  nombre_centro: string;

  @IsNotEmpty()
  @IsString()
  fecha_creacion: string;

  @IsNotEmpty()
  @IsString()
 fecha_modificacion: string;

  @IsOptional()
  @IsNumber()
  municipioId?: number;
}
