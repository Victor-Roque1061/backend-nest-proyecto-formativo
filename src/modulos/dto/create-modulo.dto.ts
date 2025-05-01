import { IsNotEmpty, IsString } from "class-validator";


export class CreateModuloDto {
    @IsNotEmpty()
    @IsString()
    fecha_accion: string;

    @IsNotEmpty()
    @IsString()
    rutas: string;

    @IsNotEmpty()
    @IsString()
    descripcion_ruta: string;

    @IsNotEmpty()
    @IsString()
    mensaje_cambio: string;


}
