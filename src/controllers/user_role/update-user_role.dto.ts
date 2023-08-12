import { IsNotEmpty } from "class-validator";
import { CreatePersonDto } from "../person/create-person.dto";

export class UpdateUserRolDto{


    
    @IsNotEmpty()
    role_id: number;

    @IsNotEmpty()
    user_id: number

  
}