import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsNumber()
    edad: number;

    @IsNotEmpty()
    @IsString()
    cedula: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    contrasena: string;

    @IsNotEmpty()
    @IsString()
    telefono: string;

    @IsNotEmpty()
    @IsBoolean()
    esta_activo: boolean;

    @IsNotEmpty()
    @IsString()
    fecha_registro: string;

    @IsNotEmpty()
    @IsNumber()
    rol: number;
}
