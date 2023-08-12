import { IsNotEmpty } from "class-validator"

export class CreateRoleMenuDto{

   // @IsNotEmpty()
    sequence:number
    @IsNotEmpty()
    role_id:number
    @IsNotEmpty()
    menu_id:number

}