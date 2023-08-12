import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty} from "class-validator";
import { TPartGender } from "src/modules/t_part_gender/t_part_gender.entity";


export class CreatePersonDto{

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
    photo_url: string

    @IsNotEmpty({message: 'El correo es requerido'})
    @IsEmail()
    email: string

    @Optional()
    address: string

    @Optional()
    phone: string

    @Optional()
    personal_number: string

    @Optional()
   // @IsDate()
    birth_date: Date

    @Optional()
    rda_number:string

    @Optional()
    position:string

    @Optional()
    role_id:number

    @IsNotEmpty({message: 'El genero es requerido'})
    t_part_gender_id:number

    id:number

    tParGender:TPartGender

}