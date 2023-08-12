import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCommissionExternalDto{
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

    @Optional()
    second_name: string

    @Optional()
    personal_number: string

    @IsNotEmpty({message: 'El nombre de la institucion representante es requerido'})
    name_institution:string

    @IsNotEmpty({message: 'El nombre del rol asignado es requerido'})
    name_role:string

    @IsNotEmpty({message: 'El id de la commission es requerido'})
    commission_id:number




}