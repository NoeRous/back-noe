import { IsNotEmpty } from "class-validator";
import { CreatePersonDto } from "../person/create-person.dto";
import { CreateApplicantDto } from "../applicant/create-applicant.dto";

export class CreatePostulationDto{
    @IsNotEmpty()
    voucher: string;

    @IsNotEmpty()
    voucher_url: string;

    @IsNotEmpty()
    institution_id: number

    @IsNotEmpty()
    position_id: number

    @IsNotEmpty()
    announcement_id: number
}