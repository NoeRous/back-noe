import { IsNotEmpty, MinLength } from "class-validator";

export class UpdateUserDto{
    
    @IsNotEmpty({
        message: 'El campo "password" no puede estar vacío',
    })
    @MinLength(1, {
        message: 'El campo "password" debe contener al menos 1 carácter',
    })
    password: string;
}