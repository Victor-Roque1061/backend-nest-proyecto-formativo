import { IsNotEmpty, IsString } from "class-validator";


export class CreateTiposMovimientoDto {

    @IsNotEmpty()
    @IsString()
    tipo_movimiento: string;

    @IsNotEmpty()
    @IsString()
    fecha_creacion: string;

    @IsNotEmpty()
    @IsString()
    fecha_modificacion: string;
    



}
