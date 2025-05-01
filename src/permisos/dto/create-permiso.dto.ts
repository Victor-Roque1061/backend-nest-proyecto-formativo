import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePermisoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    codigo_nombre: string;


    @IsNotEmpty()
    @IsNumber()
    modulo: string;

    @IsNotEmpty()
    @IsNumber()
    rol: string;

}

