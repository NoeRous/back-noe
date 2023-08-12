import { IsNotEmpty } from "class-validator";
import { CreatePersonDto } from "../person/create-person.dto";
import { Person } from "src/modules/person/person.entity";
import { Optional } from "@nestjs/common";

export class CreateApplicantDto{
    @Optional()
    rda_number: string;

    @IsNotEmpty()
    person: Person
}