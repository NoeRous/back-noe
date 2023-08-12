import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateAccountDto{
    @IsNotEmpty()
    account_name: string;

    @IsNumber()
    interval: number;

    @IsNotEmpty()
    company_name: string;

    @IsNotEmpty()
    logo_url: string;

    @IsEmpty()
    label_1: string;

    @IsEmpty()
    label_2: string;
    
    @IsEmpty()
    label_3: string;

    @IsEmpty()
    label_4: string;

    @IsEmpty()
    label_5: string;

}