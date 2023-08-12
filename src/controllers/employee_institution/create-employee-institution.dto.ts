import { IsNotEmpty } from "class-validator";
export class CreateEmployeeInstitutionDto{

    @IsNotEmpty()
    employee_id:number

    @IsNotEmpty()
    institution_id:number

    @IsNotEmpty()
    announcement_id:number

}