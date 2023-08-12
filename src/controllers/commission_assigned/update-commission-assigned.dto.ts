import { Optional } from "@nestjs/common";

export class UpdateCommissionAssignedDto{
    @Optional()
    act_init_date: string;

    @Optional()
    act_end_date: string;

    @Optional()
    updated_by:number
}