import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateMovimientoDto {

@IsNotEmpty()
@IsString()
fecha_creacion: string;

@IsNotEmpty()
@IsString()
fecha_modificacion: string;

@IsNotEmpty()
@IsNumber()
usuario_movimiento: number;

@IsNotEmpty()
@IsNumber()
tipo_movimiento: number;


}
