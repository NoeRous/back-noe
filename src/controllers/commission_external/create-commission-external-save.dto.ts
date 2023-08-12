import { IsNotEmpty } from "class-validator";
import { Commission } from "src/modules/commission/commission.entity"
import { Representative } from "src/modules/representative/representative.entity";

export class CreateCommissionExternalSaveDto{
   
    @IsNotEmpty({message: 'La commision es requerido'})
    commission:Commission;

    @IsNotEmpty({message: 'El representante es requerido'})
    representative:Representative;


    @IsNotEmpty({message: 'El nombre de la institucion representante es requerido'})
    name_institution:string

    @IsNotEmpty({message: 'El nombre del rol asignado es requerido'})
    name_role:string

    @IsNotEmpty()
    created_by : number
    
    @IsNotEmpty()
    updated_by : number
}