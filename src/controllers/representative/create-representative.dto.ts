import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRepresentativeDto{

    @ApiProperty({ example: '1111111' })
    @IsNotEmpty({message: 'El CI es requerido'})
    identity_card: number;

    @Optional()
    identity_card_complement:string
  
    @Optional()
    last_name: string

    @Optional()
    mothers_last_name: string

    @Optional()
    husband_last_name: string

    @IsNotEmpty({message: 'El primer nombre es requerido'})
    firts_name: string

    @IsNotEmpty({message: 'El nombre de la institución es requerido'})
    name_institution: string

    @Optional()
    second_name: string

    @Optional()
    personal_number: string
    
    @IsNotEmpty()
    created_by:number
    
    @IsNotEmpty()
    updated_by:number

}