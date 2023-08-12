import { IsNotEmpty } from "class-validator";
import { CreatePersonDto } from "../person/create-person.dto";

export class CreateUserRolDto{



    @IsNotEmpty()
    roleId: number;

    @IsNotEmpty()
    userId: number

  
}