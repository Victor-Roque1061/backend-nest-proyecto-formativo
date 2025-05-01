import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateSitioDto {

    @IsNotEmpty()
    @IsString()
    nombre_sitio: string;

    @IsNotEmpty()
    @IsString()
    ubicacion: string;

    @IsNotEmpty()
    @IsString()
    ficha_tecnica: string;

    @IsNotEmpty()
    @IsString()
    fecha_creacion: string;

    @IsNotEmpty()
    @IsString()
    fecha_modificacion: string;

    @IsNotEmpty()
    @IsNumber()
    tipo_sitio_id: number;

    @IsNotEmpty()
    @IsNumber()
    persona_encargada: number;

}
