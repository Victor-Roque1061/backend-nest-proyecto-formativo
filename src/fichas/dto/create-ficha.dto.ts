import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateFichaDto {
@IsNotEmpty()
@IsString()
fecha_creacion: string;

@IsNotEmpty()
@IsString()
fecha_modificacion: string;

@IsNotEmpty()
@IsNumber()
programa:number;
    
}
