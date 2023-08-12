import { IsNotEmpty } from "class-validator";

export class CreateAnnouncementDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    date_init: Date
    @IsNotEmpty()
    date_end: Date
    @IsNotEmpty()
    cite:string
}