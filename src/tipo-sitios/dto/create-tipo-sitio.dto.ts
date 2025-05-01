import { IsDate, IsNotEmpty, IsString } from "class-validator";



export class CreateTipoSitioDto {

    @IsNotEmpty()
    @IsString()
    nombre_tipo_sitio: string;

    @IsNotEmpty()
    @IsString()
    fecha_creacion: String; 

    @IsNotEmpty()
    @IsString()
    fecha_modificacion: String;

}
