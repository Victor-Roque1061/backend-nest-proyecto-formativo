import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateTipoMaterialeDto {

@IsNotEmpty()
@IsNumber()
tipo_elemento: number;

@IsNotEmpty()
@IsBoolean()
estado: boolean;

@IsNotEmpty()
@IsString()
fecha_creacion: string;

@IsNotEmpty()
@IsString()
fecha_modificacion: string;

}
