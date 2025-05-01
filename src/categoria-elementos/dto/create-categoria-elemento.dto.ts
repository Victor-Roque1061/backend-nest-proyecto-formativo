import { IsNotEmpty, IsString } from "class-validator";


export class CreateCategoriaElementoDto {
@IsNotEmpty({message: 'El campo codigo_upsena es obligatorio'})
@IsString()
codigo_upsena: string;

@IsNotEmpty()
@IsString()
nombre_categoria: string;

@IsNotEmpty()
@IsString()
fecha_creacion: string;

@IsNotEmpty()
@IsString()
fecha_modificacion: string;


}
