import { Optional } from "@nestjs/common";
import { IsEmpty, IsNotEmpty, isNotEmpty } from "class-validator";
import { Person } from "src/modules/person/person.entity";

export class CreateEmployeeDto{

    @IsNotEmpty()
    position:string;

    @IsNotEmpty()
    person: Person;
    
    @Optional()
    created_by:number
}