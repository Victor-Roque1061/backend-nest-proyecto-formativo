import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class CreateRoleDto {

    @IsNotEmpty()
    @IsString()
    nombre_rol: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsBoolean()
    estado: boolean;

    @IsNotEmpty()
    @IsString()
    fecha_creacion: string;


}
