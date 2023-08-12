import { Optional } from "@nestjs/common"

export class updateRoleMenuDto{
    @Optional()
    sequence:number
    @Optional()
    role_id:number
    @Optional()
    menu_id:number
}