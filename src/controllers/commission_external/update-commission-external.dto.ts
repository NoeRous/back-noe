import { Optional } from "@nestjs/common";
import { UpdateRepresentativeDto } from "../representative/update-representative.dto";

export class UpdateCommissionExternalDto{

    @Optional()
    representative: UpdateRepresentativeDto

    @Optional()
    name_role:string

    @Optional()
    name_institution:string

    @Optional()
    updated_by :number

}