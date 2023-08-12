import { IsNotEmpty } from "class-validator";

export class CreateInstitutionDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    date_ini: Date


    @IsNotEmpty()
    date_end: Date

    @IsNotEmpty()
    state: string

    @IsNotEmpty()
    cite: string
}