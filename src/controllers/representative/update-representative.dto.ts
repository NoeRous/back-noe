import { Optional } from "@nestjs/common";

export class UpdateRepresentativeDto{
    @Optional()
    identity_card: number;

    @Optional()
    identity_card_complement:string
  
    @Optional()
    last_name: string

    @Optional()
    mothers_last_name: string

    @Optional()
    husband_last_name: string

    @Optional()
    firts_name: string

    @Optional()
    second_name: string

    @Optional()
    personal_number: string

    @Optional()
    name_institution: string

    @Optional()
    updated_by:number
}